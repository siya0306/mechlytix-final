import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const updateEnabled = () => setEnabled(mediaQuery.matches);
    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);
    return () => mediaQuery.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor-active");
    const interactiveSelector = "a, button, input, textarea, select, [role='button']";
    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement;
      const interactiveTarget = target.closest(interactiveSelector);
      const cardTarget = target.closest(".feature-card, article.group");
      const imageTarget = target.closest("main img");
      const buttonTarget = target.closest<HTMLElement>(".motion-button");
      setHovering(Boolean(interactiveTarget || cardTarget || imageTarget));
      setLabel(
        interactiveTarget?.getAttribute("data-cursor") ??
          (cardTarget ? "EXPLORE" : imageTarget ? "VIEW" : ""),
      );

      document.querySelectorAll<HTMLElement>(".motion-button").forEach((button) => {
        const bounds = button.getBoundingClientRect();
        const distanceX = event.clientX - (bounds.left + bounds.width / 2);
        const distanceY = event.clientY - (bounds.top + bounds.height / 2);
        const distance = Math.hypot(distanceX, distanceY);
        const range = 130;
        if (distance < range) {
          const strength = (1 - distance / range) * 8;
          button.style.setProperty("--magnetic-x", `${(distanceX / range) * strength}px`);
          button.style.setProperty("--magnetic-y", `${(distanceY / range) * strength}px`);
        } else {
          button.style.removeProperty("--magnetic-x");
          button.style.removeProperty("--magnetic-y");
        }
      });

      if (buttonTarget) setLabel(buttonTarget.getAttribute("data-cursor") ?? "OPEN");
    };
    const handlePointerDown = () => setPressed(true);
    const handlePointerUp = () => setPressed(false);
    const handlePointerLeave = () => {
      setHovering(false);
      setLabel("");
      document.querySelectorAll<HTMLElement>(".motion-button").forEach((button) => {
        button.style.removeProperty("--magnetic-x");
        button.style.removeProperty("--magnetic-y");
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className={`custom-cursor ${hovering ? "is-hovering" : ""} ${pressed ? "is-pressed" : ""}`}
    >
      <span
        className="custom-cursor__ring"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      <span
        className="custom-cursor__dot"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      {label && (
        <span
          className="custom-cursor__label"
          style={{ transform: `translate3d(${position.x + 22}px, ${position.y - 30}px, 0)` }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
