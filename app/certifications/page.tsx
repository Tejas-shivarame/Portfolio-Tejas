import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";
import { CertificateCard } from "@/components/certificate-card";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = buildMetadata({
  title: "Certifications",
  description:
    "Professional certifications in Python, Django, SQL, Docker, and web development.",
  path: "/certifications",
});

export default function CertificationsPage() {
  return (
    <div className="pt-20">
      <section className="pt-16 pb-8 sm:pt-24">
        <div className="container max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            {"// certifications"}
          </p>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Continuous learning, on record.
          </h1>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <CertificateCard key={cert.id} certification={cert} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
