import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import cncImage from "@/assets/technical-cnc.jpg";
import { BulletList, CtaBand, PageHero, SectionHeading } from "@/components/site/Blocks";
import { Icon } from "@/components/site/Icon";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SOLUTION_BLOCKS } from "@/lib/site-data";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions | Lean, TPM, Six Sigma & Process Improvement Consulting" },
      {
        name: "description",
        content:
          "Lean manufacturing, industrial engineering, TPM, Six Sigma, OEE, supply chain, business process, plant setup, EHS and digital transformation consulting from Mechlytix.",
      },
      { property: "og:title", content: "Our Expertise & Solutions | Mechlytix" },
      { property: "og:description", content: "Driving Excellence. Delivering Results." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Our Expertise & Solutions"
        subtitle="Driving Excellence. Delivering Results."
        image={cncImage}
      />

      <section className="section-y">
        <div className="container-page space-y-6">
          {SOLUTION_BLOCKS.map((block, i) => {
            const leftItems = block.items.slice(0, Math.ceil(block.items.length / 2));
            const rightItems = block.items.slice(Math.ceil(block.items.length / 2));
            const qualityTools = [
              "Pareto Analysis",
              "Check Sheets",
              "Scatter Diagram",
              "Stratification & Process Flow Analysis",
              "Fishbone Diagram",
              "Histogram",
              "Control Charts",
            ];

            return (
              <Reveal key={block.id} delay={(i % 2) * 80}>
                <article
                  id={block.id}
                  className="scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-[#cfe0f5] bg-white shadow-[0_8px_18px_rgba(15,53,90,0.06)]"
                >
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={block.id} className="border-0">
                      <AccordionTrigger className="group w-full justify-between gap-4 bg-[#f7f9fc] px-4 py-4 text-left hover:no-underline data-[state=open]:rounded-b-none md:px-6 md:py-5">
                        <div className="flex w-full items-center gap-3 md:gap-4">
                          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-[#b6cced] bg-[#edf5ff] text-[#1b4d8f] md:size-10">
                            <Icon name={block.icon} className="size-4 md:size-5" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <h2 className="font-display text-xl font-bold tracking-[-0.03em] text-[#0d2343] md:text-[1.9rem]">
                              {block.title}
                            </h2>
                            <p className="mt-1 text-sm italic text-slate-600 md:text-base">
                              {block.description}
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="border-t border-[#dfeaf7] bg-[#f9fbff] px-5 pb-5 pt-6 md:px-7">
                        <div className="grid gap-6 md:grid-cols-2">
                          <ul className="space-y-3 text-lg text-slate-700">
                            {leftItems.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span className="mt-2 size-2 rounded-full bg-[#2b78d6]" aria-hidden="true" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          <ul className="space-y-3 text-lg text-slate-700">
                            {rightItems.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span className="mt-2 size-2 rounded-full bg-[#2b78d6]" aria-hidden="true" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {block.id === "quality" && (
                          <div className="mt-7 rounded-2xl border border-[#bdd2ed] bg-[#edf5ff] p-5 md:p-6">
                            <h3 className="mb-5 font-display text-2xl font-extrabold text-[#123a6b]">
                              7 QC Tools
                            </h3>
                            <div className="grid gap-6 md:grid-cols-2">
                              <ul className="space-y-3 text-lg text-slate-700">
                                {qualityTools.slice(0, 4).map((tool) => (
                                  <li key={tool} className="flex items-start gap-3">
                                    <span className="mt-2 size-2 rounded-full bg-[#2b78d6]" aria-hidden="true" />
                                    <span>{tool}</span>
                                  </li>
                                ))}
                              </ul>
                              <ul className="space-y-3 text-lg text-slate-700">
                                {qualityTools.slice(4).map((tool) => (
                                  <li key={tool} className="flex items-start gap-3">
                                    <span className="mt-2 size-2 rounded-full bg-[#2b78d6]" aria-hidden="true" />
                                    <span>{tool}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>


      <CtaBand
        title="Which improvement will move your numbers first?"
        text="We help you prioritize, then implement alongside your teams."
        primaryLabel="Talk to an Expert"
        secondaryLabel="Partner With Mechlytix"
        secondaryTo="/partnership"
      />
    </>
  );
}
