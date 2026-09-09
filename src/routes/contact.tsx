import { createFileRoute } from "@tanstack/react-router";
import { Globe, Mail, MapPin, Phone, Send, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { PageHero, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY, SERVICE_OPTIONS } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mechlytix | Industrial Consulting in Vadodara, Gujarat" },
      {
        name: "description",
        content:
          "Contact Mechlytix for operational excellence, lean manufacturing, industrial engineering, training and recruitment support. Based in Vadodara, Gujarat, India.",
      },
      { property: "og:title", content: "Contact Mechlytix" },
      {
        property: "og:description",
        content: "Let's Build Excellence Together. Talk to our consulting team.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  company: z.string().trim().min(2, "Please enter your company name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(160),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(24),
  service: z.string().min(1, "Please select an area of interest"),
  message: z.string().trim().min(10, "Please tell us a little about your requirement").max(1200),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const DETAILS = [
  { label: "Contact Persons", value: COMPANY.contactNames.join(" & "), Ico: User, href: null },
  ...COMPANY.phones.map((phone) => ({
    label: "Phone",
    value: phone.number,
    Ico: Phone,
    href: phone.href,
  })),
  { label: "Email", value: COMPANY.email, Ico: Mail, href: COMPANY.emailHref },
  { label: "Website", value: COMPANY.website, Ico: Globe, href: `https://${COMPANY.website}` },
  { label: "Location", value: COMPANY.location, Ico: MapPin, href: null },
];

function ContactPage() {
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = contactSchema.safeParse({ ...data, service });

    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        if (response.status === 503) {
          const subject = encodeURIComponent(`Website enquiry from ${parsed.data.name}`);
          const body = encodeURIComponent(
            [
              `Name: ${parsed.data.name}`,
              `Company: ${parsed.data.company}`,
              `Email: ${parsed.data.email}`,
              `Phone: ${parsed.data.phone}`,
              `Area of interest: ${parsed.data.service}`,
              "",
              parsed.data.message,
            ].join("\n"),
          );
          window.location.href = `mailto:info@mechlytix.in?subject=${subject}&body=${body}`;
          return;
        }
        throw new Error(result?.error ?? "We could not send your enquiry.");
      }

      form.reset();
      setService("");
      toast.success("Your enquiry has been sent to Mechlytix.", {
        description: "We'll get back to you shortly.",
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "We could not send your enquiry.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Excellence Together"
        subtitle="Tell us about your operations and the results you want to achieve."
      />

      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <Reveal className="w-full">
              <SectionHeading eyebrow="Get in Touch" title="Contact details" />
              <ul className="mt-8 space-y-3">
                {DETAILS.map((detail) => (
                  <li
                    key={detail.label}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky-soft text-primary">
                      <detail.Ico className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[0.7rem] font-bold tracking-[0.16em] uppercase text-muted-foreground">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="font-display text-base font-bold text-navy transition-colors hover:text-primary"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="font-display text-base font-bold text-navy">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl border border-border bg-card p-7 shadow-lift lg:p-9"
              >
                <h2 className="font-display text-2xl font-bold text-navy">Send an enquiry</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share a few details and our team will respond with the right next step.
                </p>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full Name" error={errors.name}>
                    <Input id="name" name="name" placeholder="Your name" autoComplete="name" />
                  </Field>
                  <Field id="company" label="Company" error={errors.company}>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Company name"
                      autoComplete="organization"
                    />
                  </Field>
                  <Field id="email" label="Email" error={errors.email}>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                    />
                  </Field>
                  <Field id="phone" label="Phone" error={errors.phone}>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      autoComplete="tel"
                    />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field id="service" label="Area of Interest" error={errors.service}>
                      <Select value={service} onValueChange={setService}>
                        <SelectTrigger id="service" className="w-full">
                          <SelectValue placeholder="Select a service area" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICE_OPTIONS.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <Field id="message" label="How can we help?" error={errors.message}>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Describe your current challenge, plant location and objectives."
                      />
                    </Field>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="mt-7 w-full sm:w-auto"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Enquiry"}
                  <Send className="size-4" />
                </Button>

                <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Mail className="size-3.5" aria-hidden="true" />
                  We typically respond within one business day.
                </p>
              </form>
            </Reveal>
          </div>

          <Reveal className="mt-8 w-full">
            <div className="grid w-full gap-6 md:grid-cols-[0.95fr_1.8fr] lg:grid-cols-[0.9fr_1.7fr] lg:items-stretch">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="aspect-[16/11] w-full overflow-hidden bg-slate-100">
                  <iframe
                    title="Mechlytix office location"
                    src="https://www.google.com/maps?q=B%20215%2FA%2C%20B%20Wing%2C%20Hubtown%2C%20Makarpura%20Depot%2C%20Makarpura%20Rd%2C%20Vadodara%2C%20Gujarat%20390010&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=B%20215%2FA%2C%20B%20Wing%2C%20Hubtown%2C%20Makarpura%20Depot%2C%20Makarpura%20Rd%2C%20Vadodara%2C%20Gujarat%20390010"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                  >
                    Open in Google Maps
                    <MapPin className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="flex h-full min-h-[164px] rounded-2xl border border-primary/20 bg-gradient-soft p-6 lg:items-center">
                <div className="w-full max-w-[44rem]">
                  <p className="font-display text-[clamp(2.2rem,2.8vw,4rem)] font-bold leading-[0.94] tracking-[-0.04em] text-navy">
                    {COMPANY.statement}
                  </p>
                  <p className="mt-3 max-w-[36rem] text-sm leading-relaxed text-muted-foreground">
                    {COMPANY.positioning}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-xs font-bold tracking-wide uppercase text-navy">
        {label}
      </Label>
      {children}
      {error && (
        <p role="alert" className="text-xs font-semibold text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
