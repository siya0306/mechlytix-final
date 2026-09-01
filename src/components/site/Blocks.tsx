import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/site/Counter";
import { Icon } from "@/components/site/Icon";
import { Reveal } from "@/components/site/Reveal";
import { STATS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onNavy = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  onNavy?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <span className={cn("eyebrow", onNavy && "text-sky")}>
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]",
          onNavy ? "text-navy-foreground" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            onNavy ? "text-navy-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="page-hero relative overflow-hidden bg-gradient-navy">
      <div className="absolute inset-0 blueprint-grid-dark opacity-70" aria-hidden="true" />
      {image && (
        <img
          src={image}
          alt={imageAlt ?? ""}
          className="hero-image absolute inset-0 size-full object-cover opacity-25 mix-blend-luminosity"
          loading="lazy"
          aria-hidden={imageAlt ? undefined : true}
        />
      )}
      <div
        className="ambient-orbit absolute -right-40 -bottom-56 size-[34rem] rounded-full bg-sky/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative py-20 lg:py-28">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <span className="eyebrow text-sky">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 font-display text-4xl font-extrabold text-navy-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-navy-foreground/75 lg:text-xl">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function StatStrip({ variant = "light" }: { variant?: "light" | "navy" }) {
  return (
    <ul
      className={cn(
        "grid gap-4 sm:grid-cols-3",
        variant === "navy" ? "text-navy-foreground" : "text-navy",
      )}
    >
      {STATS.map((stat, i) => (
        <Reveal
          as="li"
          key={stat.label}
          delay={i * 90}
          className={cn(
            "rounded-2xl border px-6 py-7 text-center",
            variant === "navy"
              ? "border-navy-foreground/15 bg-navy-foreground/5"
              : "border-border bg-card shadow-card",
          )}
        >
          <span className="block font-display text-4xl font-extrabold text-gradient-brand lg:text-5xl">
            <Counter value={stat.value} suffix={stat.suffix} />
          </span>
          <span
            className={cn(
              "mt-2 block text-sm font-semibold tracking-wide",
              variant === "navy" ? "text-navy-foreground/70" : "text-muted-foreground",
            )}
          >
            {stat.label}
          </span>
        </Reveal>
      ))}
    </ul>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: {
  icon: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "feature-card group h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift",
        className,
      )}
    >
      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-sky-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon name={icon} className="size-6" />
      </span>
      <h3 className="mt-5 font-display text-lg font-bold text-navy">{title}</h3>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function CtaBand({
  title,
  text,
  primaryLabel = "Talk to an Expert",
  secondaryLabel,
  secondaryTo,
}: {
  title: string;
  text?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="cta-band relative overflow-hidden bg-gradient-navy">
      <div className="absolute inset-0 blueprint-grid-dark opacity-70" aria-hidden="true" />
      <div
        className="ambient-orbit absolute -top-40 -left-32 size-[30rem] rounded-full bg-sky/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative py-16 lg:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-navy-foreground sm:text-4xl">
            {title}
          </h2>
          {text && <p className="mt-4 text-lg text-navy-foreground/75">{text}</p>}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="onNavy" size="xl">
              <Link to="/contact">{primaryLabel}</Link>
            </Button>
            {secondaryLabel && secondaryTo && (
              <Button asChild variant="outlineNavy" size="xl">
                <Link to={secondaryTo as never}>{secondaryLabel}</Link>
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ChipList({ items, onNavy = false }: { items: string[]; onNavy?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-xs font-semibold",
            onNavy
              ? "border-navy-foreground/20 bg-navy-foreground/5 text-navy-foreground/85"
              : "border-border bg-secondary text-secondary-foreground",
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function BulletList({ items, columns = 2 }: { items: string[]; columns?: 1 | 2 | 3 }) {
  return (
    <ul
      className={cn(
        "grid gap-x-8 gap-y-2.5",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
          <ArrowRight className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
