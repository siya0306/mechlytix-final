import { createFileRoute } from "@tanstack/react-router";
import { UserCheck } from "lucide-react";
import recruitmentImage from "@/assets/recruitment.jpg";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { RECRUITMENT_SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/recruitment")({
  head: () => ({
    meta: [
      { title: "Recruitment & Workforce Solutions | Technical Hiring | Mechlytix" },
      {
        name: "description",
        content:
          "Technical and engineering recruitment, plant head and operations leadership hiring, contract staffing, consultant deployment and interim management support.",
      },
      { property: "og:title", content: "Recruitment & Workforce Solutions | Mechlytix" },
      {
        property: "og:description",
        content:
          "Helping organizations build high-performing teams and access specialized expertise.",
      },
      { property: "og:url", content: "/recruitment" },
    ],
    links: [{ rel: "canonical", href: "/recruitment" }],
  }),
  component: RecruitmentPage,
});

function RecruitmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Recruitment & Workforce"
        title="Recruitment & Workforce Solutions"
        subtitle="Helping organizations build high-performing teams and access specialized expertise."
        image={recruitmentImage}
      />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <img
              src={recruitmentImage}
              alt="Hiring discussion between a recruiter and an engineering candidate in an industrial office"
              width={1600}
              height={1104}
              loading="lazy"
              className="h-80 w-full rounded-3xl object-cover shadow-lift lg:h-[26rem]"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Services"
              title="Technical and leadership hiring for industrial organizations"
              description="From individual specialists to complete plant leadership teams, delivered with an operations-first understanding of the roles."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {RECRUITMENT_SERVICES.map((service, i) => (
                <Reveal as="li" key={service} delay={(i % 2) * 60}>
                  <div className="flex h-full items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card">
                    <UserCheck className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {service}
                  </div>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Discuss Your Hiring Requirement"
        text="Tell us the role, the plant and the timeline — we will map the right profile."
        primaryLabel="Discuss Your Hiring Requirement"
        secondaryLabel="Partner With Mechlytix"
        secondaryTo="/partnership"
      />
    </>
  );
}
