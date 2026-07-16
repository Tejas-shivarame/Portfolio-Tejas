"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnimatedGradient } from "@/components/animated-gradient";
import { ParticleBackground } from "@/components/particle-background";
import { TypingEffect } from "@/components/typing-effect";
import { siteConfig } from "@/data/site-config";
import { socialLinks } from "@/data/social-links";

const iconMap = { github: Github, linkedin: Linkedin, twitter: Twitter, mail: Mail, instagram: Github };

const roles = [
  "Python Backend Developer",
  "Django & DRF Engineer",
  "FastAPI Specialist",
  "React / Next.js Developer",
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      <AnimatedGradient />
      <ParticleBackground density={36} />

      <div className="container relative grid items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-0">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I'm {siteConfig.name.split(" ")[0]} —{" "}
            <span className="text-gradient-signal">I build backend systems</span> that
            hold up under real traffic.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 h-8 font-mono text-lg text-primary sm:text-xl"
          >
            <TypingEffect words={roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-balance text-lg text-muted-foreground"
          >
            {siteConfig.shortBio} Currently based in {siteConfig.location}, focused on
            Django, FastAPI, and PostgreSQL.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={siteConfig.resumeUrl} download>
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex gap-3"
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-square w-full animate-float">
            <div className="absolute inset-0 rounded-[2rem] bg-signal-gradient opacity-20 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/Tejas_Profile.png"
                  alt={`Portrait of ${siteConfig.name}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card px-4 py-3 font-mono text-xs shadow-lg sm:-left-8"
          >
            <p className="text-muted-foreground">status</p>
            <p className="mt-0.5 text-primary">200 OK — shipping</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
