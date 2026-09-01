import { createFileRoute } from "@tanstack/react-router";
import { Wrench } from "lucide-react";
import cncImage from "@/assets/technical-cnc.jpg";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { TECHNICAL_EXPERTISE } from "@/lib/site-data";

export const Route = createFileRoute("/technical-expertise")({
  head: () => ({
    meta: [
      { title: "Technical Expertise | CNC, Casting, Automation & Industry 4.0 Consulting" },
      {
        name: "description",
        content:
          "Technical consulting from Mechlytix: CNC and casting process optimization, welding, fabrication, automation, PLC and control systems, Industry 4.0 and ERP integration.",
      },
      { property: "og:title", content: "Technical Expertise | Mechlytix" },
      {
        property: "og:description",
        content: "Building Capability. Driving Excellence. Delivering Results.",
      },
      { property: "og:url", content: "/technical-expertise" },
    ],
    links: [{ rel: "canonical", href: "/technical-expertise" }],
  }),
  component: TechnicalExpertisePage,
});

function TechnicalExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Technical Expertise"
        title="Technical Expertise"
        subtitle="Building Capability. Driving Excellence. Delivering Results."
        image={cncImage}
      />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <img
              src={cncImage}
              alt="Precision CNC machining centre cutting a metal component with coolant"
              width={1600}
              height={1104}
              loading="lazy"
              className="h-80 w-full rounded-3xl object-cover shadow-lift lg:h-[26rem]"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Technical Expert Solutions"
              title="Delivered through our trusted network of industry specialists"
              description="Specialist process, automation and energy expertise applied directly to your equipment, products and shop floor challenges."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {TECHNICAL_EXPERTISE.map((item, i) => (
                <Reveal as="li" key={item} delay={(i % 2) * 60}>
                  <div className="flex h-full items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card">
                    <Wrench className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </div>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Have a specific technical challenge?"
        text="Tell us about the process, equipment or product issue and we will bring the right expertise."
        primaryLabel="Talk to an Expert"
        secondaryLabel="Training Programs"
        secondaryTo="/training"
      />
    </>
  );
}
