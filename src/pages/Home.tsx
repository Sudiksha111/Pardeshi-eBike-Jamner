import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  BatteryCharging,
  Check,
  ChevronRight,
  Gauge,
  Leaf,
  ShieldCheck,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/hero-ebike.jpg";
import olaGen3 from "@/assets/ola_s1pro_gen3_web_image_v2.webp";
import olaS1Pro from "@/assets/ola_s1_pro.png";
import olaS1Air from "@/assets/ola s1 air.png";
import roadstar from "@/assets/roadstar.webp";
import pe1 from "@/assets/pe1.webp";
import seeka from "@/assets/seeka.png";
import segun from "@/assets/segun.webp";
import heroVideo from "@/assets/hero-bg.mp4";

/* -------------------------------------------------------
   ANIMATION VARIANTS
------------------------------------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* -------------------------------------------------------
   HOMEPAGE DATA
------------------------------------------------------- */

const models = [
  {
    name: "S1 Pro Gen 3",
    brand: "OLA ELECTRIC",
    image: olaGen3,
    category: "Electric scooter",
    tag: "FEATURED",
  },
  {
    name: "S1 Pro",
    brand: "OLA ELECTRIC",
    image: olaS1Pro,
    category: "Electric scooter",
    tag: "PERFORMANCE",
  },
  {
    name: "S1 Air",
    brand: "OLA ELECTRIC",
    image: olaS1Air,
    category: "Electric scooter",
    tag: "URBAN",
  },
];

const discoveries = [
  { name: "Everyday rides", image: roadstar, number: "01" },
  { name: "Explore electric", image: pe1, number: "02" },
  { name: "Made for the city", image: seeka, number: "03" },
  { name: "Find your next ride", image: segun, number: "04" },
];

const benefits = [
  {
    icon: BatteryCharging,
    title: "Electric efficiency",
    text: "Explore battery-powered rides designed around your everyday journeys.",
  },
  {
    icon: Gauge,
    title: "Compare your options",
    text: "Discover different models and explore the features that matter to you.",
  },
  {
    icon: ShieldCheck,
    title: "Choose with confidence",
    text: "Review available model details before making your decision.",
  },
  {
    icon: Leaf,
    title: "A new way to move",
    text: "Discover electric mobility and rethink your everyday commute.",
  },
];

/* -------------------------------------------------------
   REUSABLE SECTION HEADING
------------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  centered?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={`mb-12 max-w-2xl ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-400">
  {eyebrow}
</p>

<h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-slate-900 dark:text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
  {title}
</h2>

<p
  className={`mt-5 text-sm leading-7 text-slate-600 dark:text-slate-600 dark:text-slate-400 sm:text-base ${
    centered ? "mx-auto max-w-2xl" : "max-w-xl"
  }`}
>
  {description}
</p>
    </motion.div>
  );
}

/* -------------------------------------------------------
   HOME PAGE
------------------------------------------------------- */

const Home = () => {
  return (
<main className="overflow-hidden bg-stone-50 text-slate-900 transition-colors duration-300 dark:bg-[#080E1D] dark:text-slate-100">      {/* HERO: cinematic dark styling retained in both themes */}
      <section className="relative isolate min-h-[720px] overflow-hidden bg-[#080E1D] sm:min-h-[760px] lg:min-h-[820px]">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 -z-20"
        >
          <img
            src={heroImage}
            alt="Electric two-wheeler collection"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </motion.div>

        <div className="absolute inset-0 -z-10 bg-[#080E1D]/65" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#080E1D] via-[#080E1D]/90 to-[#080E1D]/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080E1D] via-transparent to-[#080E1D]/45" />

        <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-80 w-80 rounded-full bg-sky-500/15 blur-[120px]" />

        <div className="mx-auto flex min-h-[720px] max-w-[1440px] items-center px-5 pb-24 pt-28 sm:min-h-[760px] sm:px-10 lg:min-h-[820px] lg:px-16">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Hero copy */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              className="relative z-10"
            >
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2.5 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-200 sm:text-xs">
                  The electric collection
                </span>
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.065em] text-slate-900 dark:text-white sm:text-7xl lg:text-[88px]">
                Find your
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  kind of
                </span>
                <br />
                electric.
              </h1>

              <p className="mt-8 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
                Discover electric scooters and motorcycles from multiple
                brands. Compare models, explore their features and find a ride
                that fits your everyday life.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="group h-14 rounded-full border border-blue-400/40 bg-blue-600 px-7 text-sm font-bold text-slate-900 dark:text-white shadow-[0_0_35px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_45px_rgba(37,99,235,0.4)] sm:text-base"
                >
                  <Link to="/brands">
                    Explore the collection
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-14 rounded-full border-white/20 bg-white/[0.04] px-7 text-sm font-semibold text-slate-900 dark:text-slate-900 dark:text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-slate-900 dark:text-white sm:text-base"
                >
                  <a href="#featured">Discover the rides</a>
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-6 text-xs text-slate-300 sm:text-sm">
                {[
                  "Multiple brands",
                  "Scooter & motorcycle discovery",
                  "Explore at your pace",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-blue-400" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Featured scooter */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="pointer-events-none absolute inset-10 rounded-full bg-blue-500/25 blur-[100px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#101a30]/70 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-colors duration-500 hover:border-blue-400/30">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#182743] via-[#111c32] to-[#0a1222]">
                  <div className="absolute right-5 top-5 z-10 rounded-full border border-blue-300/20 bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-blue-200 backdrop-blur-xl">
                    EDITOR&apos;S PICK
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.16),transparent_65%)]" />

                  <motion.img
                    src={olaGen3}
                    alt="OLA S1 Pro Gen 3 electric scooter"
                    className="relative h-[280px] w-full object-contain p-3 sm:h-[400px]"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <div className="flex items-center justify-between gap-4 px-3 pb-3 pt-5 sm:px-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-400">
                      Featured model
                    </p>
                    <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                      OLA S1 Pro Gen 3
                    </h2>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      Explore the details
                    </p>
                  </div>

                  <Link
                    to="/brands"
                    aria-label="Explore OLA electric scooters"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-600 text-slate-900 dark:text-white shadow-lg shadow-blue-950/40 transition-all duration-300 hover:scale-110 hover:bg-blue-500"
                  >
                    <ArrowDownRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-[#111b30]/90 px-5 py-4 shadow-xl backdrop-blur-xl sm:block"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">
                  Your next ride
                </p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                  Starts with a discovery.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <a
          href="#featured"
          className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-400 transition-colors hover:text-blue-300 sm:text-xs"
        >
          Scroll to explore
          <ChevronRight className="h-4 w-4 rotate-90" />
        </a>
      </section>

      {/* THREE-STEP INTRO */}
      <section className="border-y border-border bg-white dark:border-white/[0.06] dark:bg-white dark:bg-white dark:bg-[#0b1324]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto grid max-w-[1440px] gap-0 px-5 py-7 sm:grid-cols-3 sm:px-10 lg:px-16"
        >
          {[
            ["01", "Discover", "Browse electric two-wheelers"],
            ["02", "Compare", "Understand your options"],
            ["03", "Choose", "Find your preferred ride"],
          ].map(([number, title, description]) => (
            <motion.div
              key={number}
              variants={fadeUp}
              className="group flex items-center gap-4 border-b border-border py-5 last:border-0 dark:border-white/[0.06] sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-0 sm:last:pr-0"
            >
              <span className="text-sm font-bold tabular-nums text-blue-500 dark:text-blue-400">
                {number}
              </span>
              <div>
                <h3 className="font-bold text-foreground transition-colors group-hover:text-blue-600 dark:text-slate-900 dark:text-white dark:group-hover:text-blue-300">
                  {title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground dark:text-slate-600 dark:text-slate-400 sm:text-sm">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FEATURED MODELS */}
      <section
        id="featured"
        className="scroll-mt-24 bg-background py-20 transition-colors duration-300 dark:bg-[#080E1D] sm:py-28"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-[0.28em] text-blue-500 dark:text-blue-400"
              >
                The collection
              </motion.p>

              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-4 text-3xl font-black tracking-[-0.045em] text-foreground dark:text-slate-900 dark:text-white sm:text-5xl"
              >
                Find your next ride.
              </motion.h2>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground dark:text-slate-600 dark:text-slate-400 sm:text-base"
              >
                Start with these featured electric scooters, then explore the
                wider collection.
              </motion.p>
            </div>

            <Button
              asChild
              variant="outline"
              className="group h-12 w-fit rounded-full border-border bg-background px-6 text-foreground transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-700 dark:border-white/15 dark:bg-white/[0.03] dark:text-slate-900 dark:text-white dark:hover:text-slate-900 dark:text-white"
            >
              <Link to="/brands">
                View all brands
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {models.map((model) => (
              <motion.article
                key={model.name}
                variants={fadeUp}
                className="group overflow-hidden rounded-[1.75rem] border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_22px_70px_rgba(0,0,0,0.12)] dark:border-white/[0.08] bg-white dark:bg-[#101a2d] dark:hover:border-blue-400/30 dark:hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)]"
              >
                {/* Product image */}
                <div className="relative flex h-[270px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a2943] via-[#121f35] to-[#0c1526] p-5 sm:h-[290px]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_68%)] transition-opacity duration-500 group-hover:opacity-150" />

                  <span className="absolute left-5 top-5 z-10 rounded-full border border-blue-300/20 bg-blue-500/10 px-3 py-1.5 text-[9px] font-bold tracking-[0.17em] text-blue-200 backdrop-blur-xl">
                    {model.tag}
                  </span>

                  <motion.img
                    src={model.image}
                    alt={model.name}
                    loading="lazy"
                    className="relative h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#101a2d]/50 to-transparent" />
                </div>

                {/* Product details */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] font-bold tracking-[0.22em] text-blue-600 dark:text-blue-400">
                      {model.brand}
                    </p>
                    <span className="rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground dark:border-white/[0.08] dark:text-slate-600 dark:text-slate-400">
                      Electric
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-blue-700 dark:text-slate-900 dark:text-white dark:group-hover:text-blue-200">
                    {model.name}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground dark:text-slate-600 dark:text-slate-400">
                    {model.category}
                  </p>

                  <Link
                    to="/brands"
                    className="mt-6 flex items-center justify-between border-t border-border pt-5 text-sm font-semibold text-foreground transition-colors hover:text-blue-700 dark:border-white/[0.08] dark:text-slate-300 dark:hover:text-blue-300"
                  >
                    Explore model
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-500/10 dark:border-white/10">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <p className="mt-6 text-xs leading-6 text-muted-foreground dark:text-slate-500">
            Product availability, specifications and prices should be confirmed
            against the final showroom dataset.
          </p>
        </div>
      </section>

      {/* DISCOVER MORE */}
      <section className="relative overflow-hidden border-y border-border bg-muted/40 py-20 transition-colors duration-300 dark:border-white/[0.06] dark:bg-[#0b1324] sm:py-28">
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <SectionHeading
            eyebrow="More to explore"
            title={
              <>
                Different rides.
                <br />
                <span className="text-blue-600 dark:text-blue-400">
                  One destination.
                </span>
              </>
            }
            description="Explore the collection and discover electric two-wheelers for different lifestyles, journeys and everyday needs."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
          >
            {discoveries.map((item) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                className="group"
              >
                <Link to="/brands" className="block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card sm:rounded-3xl dark:border-white/10 dark:bg-[#111b30]">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#060b16] via-[#060b16]/15 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="absolute inset-0 bg-blue-600/0 transition-colors duration-500 group-hover:bg-blue-600/10" />

                    <span className="absolute left-3 top-3 text-[10px] font-bold tracking-[0.2em] text-blue-300 sm:left-5 sm:top-5 sm:text-xs">
                      {item.number}
                    </span>

                    <div className="absolute inset-x-3 bottom-4 sm:inset-x-5 sm:bottom-5">
                      <h3 className="text-sm font-bold leading-snug text-slate-900 dark:text-white sm:text-xl">
                        {item.name}
                      </h3>

                      <span className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-300 transition-colors group-hover:text-blue-300 sm:text-xs">
                        Explore
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section
        id="video-showcase"
        className="bg-background py-20 transition-colors duration-300 dark:bg-[#080E1D] sm:py-28"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <SectionHeading
            centered
            eyebrow="Experience the difference"
            title={
              <>
                See Pardeshi{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  in action.
                </span>
              </>
            }
            description="Discover the design, style and experience of electric mobility through our video showcase."
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="group relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/10 transition-all duration-500 hover:border-blue-400/40 dark:border-white/10 bg-white dark:bg-[#101a2d] dark:shadow-black/30 dark:hover:border-blue-400/25 sm:rounded-[2rem]"
          >
            <div className="pointer-events-none absolute inset-0 z-10 border border-inset border-blue-400/0 transition-colors duration-500 group-hover:border-blue-400/10" />

            <video
              className="aspect-video h-auto max-h-[720px] w-full object-contain"
              controls
              preload="metadata"
              playsInline
              poster={heroImage}
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </motion.div>

          <div className="mx-auto mt-6 flex max-w-6xl flex-col gap-4 text-sm text-muted-foreground dark:text-slate-600 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>Discover electric mobility, your way.</p>

            <Link
              to="/brands"
              className="group inline-flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-blue-700 dark:text-slate-200 dark:hover:text-blue-300"
            >
              Explore the collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-t border-border bg-muted/40 py-20 transition-colors duration-300 dark:border-white/[0.06] dark:bg-white dark:bg-[#0b1324] sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <SectionHeading
            centered
            eyebrow="The Pardeshi experience"
            title={
              <>
                Better ways to{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  explore.
                </span>
              </>
            }
            description="A thoughtfully designed showroom to help you discover electric mobility and explore your options with confidence."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  key={benefit.title}
                  variants={fadeUp}
                  className="group rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-50/70 dark:border-white/[0.08] dark:bg-[#111b30] dark:hover:border-blue-400/25 dark:hover:bg-[#14213a] sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-600 transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/20 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-foreground dark:text-slate-900 dark:text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground dark:text-slate-600 dark:text-slate-400">
                    {benefit.text}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-background px-5 py-20 transition-colors duration-300 dark:bg-[#080E1D] sm:px-10 sm:py-28 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-[#142b50] via-[#10203c] to-[#0c1629] px-6 py-12 shadow-2xl shadow-black/20 sm:px-12 sm:py-16 lg:px-20 lg:py-20"
        >
          <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-[100px]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(96,165,250,0.06)_50%,transparent_65%)]" />

          <div className="relative z-10 flex flex-col justify-between gap-9 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-blue-300 sm:text-xs">
                Your journey starts here
              </p>

              <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.045em] text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Ready to go
                <br className="hidden sm:block" />{" "}
                <span className="text-blue-400">electric?</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Explore brands, discover models and take the first step
                towards finding your next ride.
              </p>
            </div>

            <Button
              asChild
              className="group h-14 shrink-0 rounded-full border border-blue-400/40 bg-blue-600 px-7 text-sm font-bold text-slate-900 dark:text-white shadow-lg shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-900/40 sm:text-base"
            >
              <Link to="/brands">
                Explore all brands
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card transition-colors duration-300 dark:border-white/[0.08] dark:bg-[#070C18]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16">
          <Link
            to="/"
            className="w-fit text-lg font-black tracking-tight text-foreground transition-opacity hover:opacity-80 dark:text-slate-900 dark:text-white"
          >
            PARDESHI{" "}
            <span className="text-blue-600 dark:text-blue-400">eBIKE.</span>
          </Link>

          <p className="text-sm text-muted-foreground dark:text-slate-500">
            Discover electric mobility, your way.
          </p>

          <nav aria-label="Footer navigation" className="flex gap-6 text-sm">
            <Link
              to="/brands"
              className="text-muted-foreground transition-colors hover:text-blue-700 dark:text-slate-600 dark:text-slate-400 dark:hover:text-blue-300"
            >
              Brands
            </Link>

            <Link
              to="/contact"
              className="text-muted-foreground transition-colors hover:text-blue-700 dark:text-slate-600 dark:text-slate-400 dark:hover:text-blue-300"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="border-t border-border px-5 py-4 text-center text-[11px] text-muted-foreground dark:border-white/[0.05] dark:text-slate-600">
          PARDESHI eBIKE · Discover electric mobility
        </div>
      </footer>
    </main>
  );
};

export default Home;