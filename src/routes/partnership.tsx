import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-factory.jpg";
import { CtaBand, FeatureCard, PageHero, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY, PARTNERSHIP_POINTS, PARTNERSHIP_PROCESS } from "@/lib/site-data";

export const Route = createFileRoute("/partnership")({
  head: () => ({
    meta: [
      { title: "Partner With Mechlytix | End-to-End Business Improvement Partnership" },
      {
        name: "description",
        content:
          "Training, consulting and implementation delivered together — a one-stop improvement partnership built on the Assess, Identify, Plan, Implement, Measure, Sustain cycle.",
      },
      { property: "og:title", content: "Partner With Mechlytix" },
      {
        property: "og:description",
        content: "We don't just recommend improvements — we help implement them.",
      },
      { property: "og:url", content: "/partnership" },
    ],
    links: [{ rel: "canonical", href: "/partnership" }],
  }),
  component: PartnershipPage,
});

function PartnershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnership"
        title="Partner With Mechlytix"
        subtitle={COMPANY.statement}
        image={heroImage}
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Partner"
            title="One partner across improvement, capability and workforce"
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERSHIP_POINTS.map((point, i) => (
              <Reveal key={point.title} delay={(i % 3) * 90}>
                <FeatureCard
                  icon={point.icon}
                  title={point.title}
                  description={point.description}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-navy text-navy-foreground">
        <div className="container-page relative">
          <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
          <div className="relative">
            <SectionHeading
              eyebrow="Our Process"
              title="A structured improvement cycle"
              align="center"
              onNavy
              description="From diagnostics to sustained results, each stage builds on measurable evidence."
            />
            <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PARTNERSHIP_PROCESS.map((stage, i) => (
                <Reveal as="li" key={stage.step} delay={(i % 3) * 90}>
                  <div className="h-full rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-6 backdrop-blur-sm transition-colors hover:border-sky/40">
                    <span className="font-display text-3xl font-black text-sky">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold">{stage.step}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">
                      {stage.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's Build Excellence Together"
        text="Start with a conversation about your operations, your targets and your timeline."
        primaryLabel="Contact Mechlytix"
        secondaryLabel="Request an Assessment"
        secondaryTo="/assessments"
      />
    </>
  );
}
