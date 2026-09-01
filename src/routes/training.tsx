import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import trainingImage from "@/assets/training.jpg";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Blocks";
import { Icon } from "@/components/site/Icon";
import { Reveal } from "@/components/site/Reveal";
import { TRAINING_CATEGORIES } from "@/lib/site-data";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Manufacturing Training | Lean, TPM, Six Sigma & IE Programs | Mechlytix" },
      {
        name: "description",
        content:
          "Practical, implementation-focused manufacturing training in lean tools, industrial engineering, TPM, quality, production excellence, supply chain and compliance awareness.",
      },
      { property: "og:title", content: "Training & Capability Development | Mechlytix" },
      {
        property: "og:description",
        content: "Practical. Implementation-Focused. Customized.",
      },
      { property: "og:url", content: "/training" },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
  component: TrainingPage,
});

function TrainingPage() {
  const categoryLinks = TRAINING_CATEGORIES.map((category) => ({
    ...category,
    id: category.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  }));

  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Training & Capability Development"
        subtitle="Practical. Implementation-Focused. Customized."
        image={trainingImage}
      />

      <section className="border-b border-border bg-secondary/50 py-6">
        <nav aria-label="Training categories" className="container-page flex flex-wrap gap-2">
          {categoryLinks.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground/75 transition-colors hover:border-primary/40 hover:text-primary"
            >
              {category.title}
            </a>
          ))}
        </nav>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Capability Building"
              title="Training that turns into shop floor change"
              description="We provide practical, implementation-focused, and customized training programs designed to build organizational capability and drive sustainable improvement."
            />
          </Reveal>
          <Reveal delay={120}>
            <img
              src={trainingImage}
              alt="Trainer working through improvement methods with a group of plant engineers"
              width={1600}
              height={1104}
              loading="lazy"
              className="h-72 w-full rounded-3xl object-cover shadow-lift lg:h-96"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-secondary/60">
        <div className="container-page">
          <SectionHeading
            eyebrow="Programs"
            title="Training categories"
            align="center"
            description="Structured modules delivered on site, tailored to your team's role and maturity level."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categoryLinks.map((category, i) => (
              <Reveal key={category.id} delay={(i % 3) * 80}>
                <article
                  id={category.id}
                  className="scroll-mt-28 h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-sky-soft text-primary">
                    <Icon name={category.icon} className="size-6" />
                  </span>
                  <h2 className="mt-5 font-display text-lg font-bold text-navy">
                    {category.title}
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[0.72rem] font-semibold text-secondary-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card p-9 shadow-card lg:p-12">
            <div className="absolute inset-0 blueprint-grid opacity-50" aria-hidden="true" />
            <div className="relative max-w-3xl">
              <SectionHeading
                eyebrow="Tailored"
                title="Customized Training Programs"
                description="Training programs designed according to industry requirements, organizational challenges, and business objectives."
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Discuss Your Training Requirements"
        text="Share your team size, roles and improvement goals and we will build the program around them."
        primaryLabel="Discuss Your Training Requirements"
        secondaryLabel="Recruitment & Workforce"
        secondaryTo="/recruitment"
      />
    </>
  );
}
