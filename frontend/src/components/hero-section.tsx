"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MouseEvent } from "react";
import { ProfileItem } from "@/lib/site-data";

type HeroSectionProps = {
  profile: ProfileItem;
};

export function HeroSection({ profile }: HeroSectionProps) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const imageX = useTransform(pointerX, [-0.5, 0.5], ["-1.8%", "1.8%"]);
  const imageY = useTransform(pointerY, [-0.5, 0.5], ["-1.4%", "1.4%"]);
  const glowX = useTransform(pointerX, [-0.5, 0.5], ["42%", "58%"]);
  const glowY = useTransform(pointerY, [-0.5, 0.5], ["44%", "56%"]);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-5 sm:px-6"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-4%] bg-[radial-gradient(circle_at_18%_8%,rgba(191,224,242,0.92)_0%,rgba(224,239,247,0.48)_28%,transparent_48%),radial-gradient(circle_at_82%_18%,rgba(230,238,249,0.96)_0%,rgba(246,249,252,0.6)_34%,transparent_54%),linear-gradient(180deg,#dcecf5_0%,#f7fbfd_52%,#eef7fb_100%)]"
        style={{ x: imageX, y: imageY }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.26)_0%,rgba(255,255,255,0.62)_54%,rgba(247,251,253,0.9)_100%)]"
      />

      <motion.div
        aria-hidden="true"
        className="absolute h-[26rem] w-[26rem] rounded-full bg-sky-200/45 blur-[100px] sm:h-[42rem] sm:w-[42rem] sm:blur-[120px]"
        style={{ left: glowX, top: glowY, translateX: "-50%", translateY: "-50%" }}
      />

      <motion.div
        aria-hidden="true"
        className="hero-gradient absolute inset-0 opacity-90"
      />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-5 max-w-[18rem] text-[0.62rem] font-medium uppercase leading-5 tracking-[0.28em] text-slate-500/80 sm:mb-6 sm:max-w-none sm:text-[0.68rem] sm:tracking-[0.72em]">
          AI Researcher × Engineer × Creator
        </p>
        <h1 className="text-[clamp(4.2rem,22vw,12rem)] font-semibold leading-none tracking-[0.08em] text-slate-950 drop-shadow-[0_18px_60px_rgba(77,117,145,0.22)] sm:font-thin sm:tracking-[0.18em]">
          {profile.name}
        </h1>
        <p className="mt-6 text-base font-semibold tracking-[0.12em] text-slate-600/90 sm:mt-7 sm:text-xl sm:tracking-[0.46em]">
          {profile.slogan}
        </p>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-slate-500/70 transition hover:text-sky-700"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
      >
        <span className="h-10 w-px bg-gradient-to-b from-slate-400/0 via-slate-400/55 to-slate-400/0" />
        <ChevronDown className="h-5 w-5 animate-bounce" strokeWidth={1.2} />
      </motion.a>
    </section>
  );
}
