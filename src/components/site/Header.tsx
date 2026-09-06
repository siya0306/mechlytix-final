import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setOpen((value) => !value);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            className="hidden shrink-0 xl:inline-flex xl:px-4 2xl:px-5"
          >
            <Link to="/contact">Talk to an Expert</Link>
          </Button>
          <button
            type="button"
            onClick={toggleMenu}
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
          aria-hidden="true"
          onClick={closeMenu}
          className="fixed inset-x-0 top-[4.5rem] bottom-0 z-[60] bg-[#03213f]/25 backdrop-blur-[1px] xl:hidden"
        />
      )}

      {open && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-[70] max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background shadow-lg xl:hidden"
          aria-hidden={false}
        >
          <div className="container-page flex min-h-full flex-col px-4 pb-8 pt-5">
            <nav aria-label="Mobile" className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to as never}
                  onClick={closeMenu}
                  className={cn(
                    "flex min-h-12 w-full items-center border-b border-border px-1 text-left text-sm font-extrabold tracking-[0.04em] text-foreground uppercase transition-colors hover:bg-sky-soft hover:text-primary",
                  )}
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button asChild variant="hero" size="xl" className="mt-7 w-full rounded-lg text-base font-extrabold">
              <Link to="/contact" onClick={closeMenu}>
                Talk to an Expert
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
