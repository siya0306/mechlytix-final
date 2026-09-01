import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "site-header sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-md transition-shadow",
        scrolled && "shadow-card",
      )}
    >
      <div className="container-page flex h-18 items-center gap-4 py-3">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Mechlytix home">
          <img
            src="/mechlytix-logo.png"
            alt="Mechlytix logo"
            width={176}
            height={79}
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        <nav aria-label="Primary" className="hidden min-w-0 flex-1 items-center gap-0 xl:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to as never}
              className="rounded-md px-1.5 py-2 text-[0.7rem] font-extrabold tracking-[0.035em] whitespace-nowrap text-foreground/75 uppercase transition-colors hover:bg-sky-soft hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 2xl:px-2 2xl:text-[0.74rem]"
              activeProps={{ className: "text-primary bg-sky-soft" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button
            asChild
            variant="hero"
            size="lg"
            className="hidden shrink-0 sm:inline-flex xl:px-4 2xl:px-5"
          >
            <Link to="/contact">Talk to an Expert</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-sky-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto border-t border-border bg-background xl:hidden"
        >
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to as never}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-extrabold tracking-[0.04em] text-foreground/85 uppercase transition-colors hover:bg-sky-soft hover:text-primary"
                activeProps={{ className: "text-primary bg-sky-soft" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="hero" size="xl" className="mt-4 w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Talk to an Expert
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
