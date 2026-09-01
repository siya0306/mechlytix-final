import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import plantImage from "@/assets/plant-warehouse.jpg";
import { CtaBand, PageHero } from "@/components/site/Blocks";
import { Icon } from "@/components/site/Icon";
import { Reveal } from "@/components/site/Reveal";
import { INDUSTRIES, INDUSTRY_GROUPS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Mechlytix Industrial Consultancy" },
      {
        name: "description",
        content:
          "Mechlytix serves 25+ industries including automotive, foundries, pharmaceutical, packaging, warehousing, healthcare and public sector organizations.",
      },
      { property: "og:title", content: "Industries We Serve | Mechlytix" },
      {
        property: "og:description",
        content: "Solutions for Every Industry. Impact Across Every Sector.",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return INDUSTRIES.filter((industry) => {
      const matchesGroup = group === "All" || industry.group === group;
      const matchesQuery =
        !q ||
        industry.name.toLowerCase().includes(q) ||
        industry.description.toLowerCase().includes(q) ||
        industry.solutions.some((s) => s.toLowerCase().includes(q));
      return matchesGroup && matchesQuery;
    });
  }, [query, group]);

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industries We Serve"
        subtitle="Solutions for Every Industry. Impact Across Every Sector."
        image={plantImage}
      />

      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <Search
                className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search industries or solutions"
                aria-label="Search industries"
                className="h-12 w-full rounded-xl border border-input bg-card pr-4 pl-10 text-sm text-foreground shadow-card placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
              />
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by sector">
              {INDUSTRY_GROUPS.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGroup(g)}
                  aria-pressed={group === g}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-bold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    group === g
                      ? "border-transparent bg-gradient-navy text-navy-foreground"
                      : "border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-primary",
                  )}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
            Showing {filtered.length} of {INDUSTRIES.length} industries
          </p>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((industry, i) => (
              <Reveal as="li" key={industry.name} delay={(i % 3) * 70}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-sky-soft text-primary">
                    <Icon name={industry.icon} className="size-6" />
                  </span>
                  <h2 className="mt-5 font-display text-base font-bold text-navy">
                    {industry.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {industry.description}
                  </p>
                  <h3 className="mt-5 text-[0.7rem] font-bold tracking-[0.16em] uppercase text-muted-foreground">
                    Relevant Solutions
                  </h3>
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {industry.solutions.map((solution) => (
                      <li
                        key={solution}
                        className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[0.7rem] font-semibold text-secondary-foreground"
                      >
                        {solution}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ul>

          {filtered.length === 0 && (
            <p className="mt-10 rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
              No industries match your search. Try a different keyword or sector.
            </p>
          )}
        </div>
      </section>

      <CtaBand
        title="Not sure where your operation fits?"
        text="Our solutions apply across manufacturing, process, logistics and service organizations."
        primaryLabel="Talk to an Expert"
        secondaryLabel="View Solutions"
        secondaryTo="/solutions"
      />
    </>
  );
}
