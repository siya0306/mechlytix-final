import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import plantImage from "@/assets/plant-warehouse.jpg";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Blocks";
import { Icon } from "@/components/site/Icon";
import { Reveal } from "@/components/site/Reveal";
import { ASSESSMENT_AREAS, ASSESSMENT_DELIVERABLES } from "@/lib/site-data";

export const Route = createFileRoute("/assessments")({
  head: () => ({
    meta: [
      { title: "Business Assessments & Diagnostics | Mechlytix Consulting" },
      {
        name: "description",
        content:
          "Productivity, operational excellence, TPM, OEE, 5S, quality, safety, certification readiness and inventory assessments with a prioritized implementation roadmap.",
      },
      { property: "og:title", content: "Business Assessments & Diagnostics | Mechlytix" },
      {
        property: "og:description",
        content:
          "Structured current state analysis, gap identification and a prioritized action plan for your operations.",
      },
      { property: "og:url", content: "/assessments" },
    ],
    links: [{ rel: "canonical", href: "/assessments" }],
  }),
  component: AssessmentsPage,
});

function AssessmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Assessments"
        title="Business Assessments & Diagnostics"
        subtitle="Know exactly where you stand before you invest in change."
        image={plantImage}
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Assessment Areas"
            title="Structured diagnostics across your operation"
            align="center"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ASSESSMENT_AREAS.map((area, i) => (
              <Reveal as="li" key={area.title} delay={(i % 3) * 80}>
                <div className="flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-sky-soft text-primary">
                    <Icon name={area.icon} className="size-6" />
                  </span>
                  <h2 className="font-display text-base font-bold text-navy">{area.title}</h2>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-secondary/60">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Deliverables"
              title="What you receive from a Mechlytix assessment"
              description="Every assessment ends with clarity on where the losses are and a practical plan to close them."
            />
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid gap-3">
              {ASSESSMENT_DELIVERABLES.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm font-semibold text-navy shadow-card"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Request an Assessment"
        text="Start with a clear, data-backed picture of your current state."
        primaryLabel="Request an Assessment"
        secondaryLabel="View Solutions"
        secondaryTo="/solutions"
      />
    </>
  );
}
