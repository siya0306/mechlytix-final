import { Link } from "@tanstack/react-router";
import { Globe, Mail, MapPin, Phone, User } from "lucide-react";
import { COMPANY, CORE_AREAS, FOOTER_NAV } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-navy text-navy-foreground">
      <div className="absolute inset-0 blueprint-grid-dark opacity-60" aria-hidden="true" />
      <div className="container-page relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="inline-flex rounded-xl bg-background px-4 py-3">
              <img
                src="/mechlytix-logo.png"
                alt="Mechlytix logo"
                width={176}
                height={79}
                loading="lazy"
                className="h-9 w-auto"
              />
            </div>
            <p className="mt-5 max-w-sm font-display text-lg font-semibold">{COMPANY.tagline}</p>
            <p className="mt-3 max-w-sm text-sm text-navy-foreground/70">{COMPANY.positioning}</p>
            <p className="mt-4 text-sm font-semibold text-navy-foreground/80">
              A {COMPANY.parentCompany} company
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {CORE_AREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-navy-foreground/20 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-navy-foreground/80"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-sm font-bold tracking-[0.18em] uppercase text-navy-foreground/60">
              Navigation
            </h2>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_NAV.map((item) => (
                <li key={item.label + item.to}>
                  <Link
                    to={item.to as never}
                    className="text-sm text-navy-foreground/80 transition-colors hover:text-navy-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold tracking-[0.18em] uppercase text-navy-foreground/60">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-navy-foreground/85">
              <li className="flex items-center gap-3">
                <User className="size-4 shrink-0" aria-hidden="true" />
                <span>{COMPANY.contactNames.join(" & ")}</span>
              </li>
              {COMPANY.phones.map((phone) => (
                <li key={phone.href} className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  <a href={phone.href} className="hover:text-navy-foreground">
                    {phone.number}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                <a href={COMPANY.emailHref} className="hover:text-navy-foreground">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="size-4 shrink-0" aria-hidden="true" />
                <a
                  href="https://www.mechlytix.in"
                  className="hover:text-navy-foreground"
                  rel="noopener"
                >
                  {COMPANY.website}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0" aria-hidden="true" />
                {COMPANY.location}
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-navy-foreground/15 pt-8 font-display text-xl font-bold sm:text-2xl">
          {COMPANY.statement}
        </p>
        <p className="mt-6 text-xs text-navy-foreground/60">
          © {COMPANY.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
