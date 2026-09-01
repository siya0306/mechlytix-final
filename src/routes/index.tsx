import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Eye } from "lucide-react";
import heroImage from "@/assets/hero-factory.jpg";
import aboutImage from "@/assets/about-team.jpg";
import parentCompaniesImage from "@/assets/Our-parent-companies.png";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/site/Icon";
import { Reveal } from "@/components/site/Reveal";
import {
  CtaBand,
  FeatureCard,
  SectionHeading,
  StatStrip,
} from "@/components/site/Blocks";
import {
  CHALLENGES,
  COMPANY,
  CORE_AREAS,
  INDUSTRIES,
  MISSION,
  SERVICES,
  VISION,
  WHO_WE_ARE,
  WHY_MECHLYTIX,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mechlytix | Industrial Engineering & Operational Excellence Consultancy" },
      {
        name: "description",
        content:
          "Mechlytix delivers industrial engineering, lean manufacturing, TPM, Six Sigma and business process improvement consulting in India. Engineering Tomorrow. Optimizing Today.",
      },
      {
        property: "og:title",
        content: "Mechlytix | Industrial Engineering & Operational Excellence Consultancy",
      },
      {
        property: "og:description",
        content:
          "Practical engineering, operational excellence and business transformation solutions for manufacturing and service organizations.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="hero-stage relative overflow-hidden bg-gradient-navy">
        <img
          src={heroImage}
          alt="Robotic arms and CNC machinery on a modern smart factory floor"
          width={1920}
          height={1200}
          className="hero-image absolute inset-0 size-full object-cover opacity-35"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-navy-deep via-navy-deep/85 to-transparent"
          aria-hidden="true"
        />
        <div
          className="blueprint-grid-dark hero-grid absolute inset-0 opacity-50"
          aria-hidden="true"
        />
        <div
          className="ambient-orbit absolute -right-52 -bottom-64 size-160 rounded-full bg-sky/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-page relative py-24 lg:py-32">
          <Reveal className="max-w-3xl">
            <span className="eyebrow text-sky">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              Industrial Engineering Consultancy
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-navy-foreground sm:text-6xl lg:text-7xl">
              Engineering Tomorrow.
              <span className="block text-sky">Optimizing Today.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/80">
              Practical engineering, operational excellence and business transformation solutions
              that help organizations improve productivity, quality, efficiency and sustainable
              growth.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="onNavy" size="xl">
                <Link to="/contact">
                  Talk to an Expert
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outlineNavy" size="xl">
                <Link to="/solutions">Explore Our Solutions</Link>
              </Button>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2">
              {CORE_AREAS.map((area) => (
                <li
                  key={area}
                  className="text-xs font-bold tracking-[0.2em] uppercase text-navy-foreground/60"
                >
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section-y bg-gradient-soft">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Are"
              title="A consulting and engineering partner built around implementation"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {WHO_WE_ARE.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <Link to="/about">
                Discover Mechlytix
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={120} className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl shadow-lift">
              <img
                src={aboutImage}
                alt="Mechlytix consultants reviewing production performance data with plant engineers"
                width={1600}
                height={1104}
                loading="lazy"
                className="h-72 w-full object-cover sm:h-90"
              />
            </div>
            <StatStrip />
          </Reveal>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            title="Our Vision & Mission"
            align="center"
            description="What we work toward, and how we get organizations there."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              { title: "Our Vision", text: VISION, Ico: Eye },
              { title: "Our Mission", text: MISSION, Ico: Compass },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 120}>
                <article className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-lift lg:p-10">
                  <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />
                  <div className="relative">
                    <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-navy text-navy-foreground">
                      <card.Ico className="size-7" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-bold text-navy">{card.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {card.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section-y bg-secondary/60">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Do"
            title="Expertise across engineering, operations, quality and growth"
            description="A complete improvement portfolio — from shop floor productivity to business process transformation, training and workforce."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 90}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-sky-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon name={service.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    to={service.to as never}
                    {...(service.hash ? { hash: service.hash } : {})}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-navy"
                  >
                    Learn More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Solutions for Every Industry. Impact Across Every Sector."
            align="center"
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {INDUSTRIES.map((industry, i) => (
              <Reveal as="li" key={industry.name} delay={(i % 4) * 60}>
                <div className="flex h-full items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft text-primary">
                    <Icon name={industry.icon} className="size-4.5" />
                  </span>
                  <span className="text-sm font-semibold text-navy">{industry.name}</span>
                </div>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Button asChild variant="outlineBrand" size="lg">
              <Link to="/industries">
                Explore Industries
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="relative overflow-hidden bg-gradient-navy section-y">
        <div className="absolute inset-0 blueprint-grid-dark opacity-60" aria-hidden="true" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Where We Help"
            title="Common Challenges We Address"
            onNavy
            align="center"
            description="If any of these sound familiar, there is measurable improvement available."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CHALLENGES.map((challenge, i) => (
              <Reveal as="li" key={challenge.title} delay={(i % 5) * 70}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-navy-foreground/12 bg-navy-foreground/5 px-4 py-6 text-center transition-colors hover:border-sky/50 hover:bg-navy-foreground/10">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-sky/15 text-sky">
                    <Icon name={challenge.icon} className="size-5" />
                  </span>
                  <span className="text-sm font-semibold text-navy-foreground">
                    {challenge.title}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-12 text-center">
            <p className="font-display text-xl font-bold text-navy-foreground sm:text-2xl">
              We don't just recommend improvements — we help implement them.
            </p>
            <Button asChild variant="onNavy" size="xl" className="mt-7">
              <Link to="/contact">Let's Solve Your Challenge</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* WHY MECHLYTIX */}
      <section className="section-y bg-gradient-soft">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Mechlytix"
            title="Built for organizations that want results on the ground"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_MECHLYTIX.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 90}>
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-[#f5f5f3]">
        <div className="container-page">
          <div className="mx-auto flex max-w-[1400px] items-center justify-center">
            <img
              src={parentCompaniesImage}
              alt="Our parent companies"
              className="block w-full max-w-2xl object-contain"
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to Improve Your Business Performance?"
        text={`Let's identify opportunities, eliminate inefficiencies and build sustainable improvement. Speak with ${COMPANY.contactName} at ${COMPANY.phone}.`}
        primaryLabel="Talk to an Expert"
        secondaryLabel="Contact Mechlytix"
        secondaryTo="/contact"
      />
    </>
  );
}
