"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

import { Certification } from "@/types";
import { Button } from "@/components/ui/button";

export function CertificateCard({
  certification,
  index,
}: {
  certification: Certification;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
    >
      <div className="relative flex aspect-[4/3] items-center justify-center bg-surface p-8">
        <Image
          src={certification.image}
          alt={`${certification.title} certificate`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-8"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start gap-2">
          <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <h3 className="font-display text-base font-semibold leading-snug">
            {certification.title}
          </h3>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{certification.issuer}</p>
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {certification.date}
        </p>

        {certification.credentialUrl && (
          <Button asChild size="sm" variant="secondary" className="mt-5">
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}
