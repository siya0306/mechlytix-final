import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import { CtaBand, FeatureCard, PageHero, SectionHeading, StatStrip } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { APPROACH, COMPANY, MISSION, VISION, WHO_WE_ARE } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mechlytix | Operational Excellence & Engineering Consultants" },
      {
        name: "description",
        content:
          "Mechlytix is a professional consulting and engineering solutions provider with 3+ years of experience across 10+ industries and 50+ projects delivered.",
      },
      { property: "og:title", content: "About Mechlytix | Operational Excellence Consultants" },
      {
        property: "og:description",
        content:
          "Our vision, mission, approach and experience in industrial engineering and business transformation consulting.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Practical consulting for operational excellence"
        subtitle="Your Trusted Partner for Operational Excellence, Business Transformation & Sustainable Growth."
        image={aboutImage}
      />

      <section className="section-y">
        <div className="container-page grid items-start gap-14 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <SectionHeading eyebrow="Who We Are" title="Consulting built around implementation" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Mechlytix is a consulting and engineering solutions company under{" "}
                {COMPANY.parentCompany}.
              </p>
              {WHO_WE_ARE.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={aboutImage}
              alt="Industrial consultants discussing improvement plans inside a manufacturing plant"
              width={1600}
              height={1104}
              loading="lazy"
              className="h-80 w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-secondary/60">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          {[
            { title: "Our Vision", text: VISION, Ico: Eye },
            { title: "Our Mission", text: MISSION, Ico: Compass },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 120}>
              <article className="h-full rounded-3xl border border-border bg-card p-8 shadow-card lg:p-10">
                <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-navy text-navy-foreground">
                  <card.Ico className="size-7" aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold text-navy">{card.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Approach"
            title="How we deliver measurable, lasting improvement"
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {APPROACH.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 90}>
                <FeatureCard icon={item.icon} title={item.title} description={item.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-gradient-soft">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Experience"
            title="Experience that spans industries and operations"
            align="center"
          />
          <div className="mt-12">
            <StatStrip />
          </div>
        </div>
      </section>

      <CtaBand
        title="Work With Mechlytix"
        text="Let's discuss where your operations are today and what measurable improvement looks like."
        primaryLabel="Talk to an Expert"
        secondaryLabel="Explore Our Solutions"
        secondaryTo="/solutions"
      />
    </>
  );
}
