
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  MoveRight,
  Zap,
} from 'lucide-react';

import Ola from '@/assets/ola.png';
import Seeka from '@/assets/seeka.png';
import NK from '@/assets/nk2.png';
import PE from '@/assets/pe1.webp';

const brands = [
  {
    name: 'OLA',
    slug: 'ola',
    number: '01',
    category: 'SMART ELECTRIC MOBILITY',
    description:
      'Discover a new generation of electric scooters built around smart technology, effortless movement and modern design.',
    bikeCount: 8,
    features: ['Smart Connectivity', 'Fast Charging', 'Long Range'],
    image: Ola,
    accent: '#55B9FF',
    label: 'Intelligent by design',
  },
  {
    name: 'SEEKA',
    slug: 'seeka',
    number: '02',
    category: 'EVERYDAY ELECTRIC',
    description:
      'Make every journey count with practical electric mobility designed for everyday convenience and efficiency.',
    bikeCount: 10,
    features: ['Eco-Friendly', 'Affordable', 'Reliable'],
    image: Seeka,
    accent: '#79D8A0',
    label: 'Move with purpose',
  },
  {
    name: 'PE',
    slug: 'pe',
    number: '03',
    category: 'PERFORMANCE ELECTRIC',
    description:
      'For riders who value a spirited ride, contemporary styling and an electric companion for everyday adventures.',
    bikeCount: 6,
    features: ['High Performance', 'Lightweight', 'Durable Design'],
    image: PE,
    accent: '#C2A4FF',
    label: 'Built to move',
  },
  {
    name: 'NK',
    slug: 'nk',
    number: '04',
    category: 'NEXT-GEN MOBILITY',
    description:
      'Explore modern electric bikes that bring together distinctive styling, advanced features and everyday versatility.',
    bikeCount: 7,
    features: ['Advanced Tech', 'Stylish Design', 'Premium Quality'],
    image: NK,
    accent: '#FFB078',
    label: 'A different direction',
  },
];

const benefits = [
  {
    number: '01',
    title: 'Curated collections',
    description:
      'Explore a selection of electric mobility brands in one convenient destination.',
  },
  {
    number: '02',
    title: 'Find your ride',
    description:
      'Compare available models and discover the features that fit your everyday journeys.',
  },
  {
    number: '03',
    title: 'Electric by nature',
    description:
      'Discover electric alternatives designed for a more efficient way to get around.',
  },
];

const Brands = () => {
  return (
    <main className="brands-page min-h-screen overflow-hidden bg-stone-50 pt-20 text-slate-900 dark:bg-[#080B10] dark:text-white selection:bg-sky-400 selection:text-black">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[130px]" />
        <div className="absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[130px]" />
      </div>

      {/* Editorial hero */}
      <section className="relative z-10 px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div
            className="brands-reveal flex items-center gap-3"
            style={{ animationDelay: '100ms' }}
          >
            <span className="h-px w-10 bg-sky-400" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300 sm:text-xs">
              The brand collection
            </p>
          </div>

          <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.45fr_0.55fr]">
            <h1 className="editorial-title">
              <span className="editorial-line">
                <span
                  className="editorial-word"
                  style={{ '--delay': '150ms' } as React.CSSProperties}
                >
                  Find your
                </span>
              </span>

              <span className="editorial-line">
                <span
                  className="editorial-word font-editorial italic text-sky-300"
                  style={{ '--delay': '350ms' } as React.CSSProperties}
                >
                  kind of
                </span>{' '}
                <span
                  className="editorial-word text-white"
                  style={{ '--delay': '520ms' } as React.CSSProperties}
                >
                  electric.
                </span>
              </span>
            </h1>

            <div
              className="brands-reveal max-w-md pb-2 lg:justify-self-end"
              style={{ animationDelay: '450ms' }}
            >
              <p className="text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                Four distinct names. Different ways to move. Explore our
                collection of electric mobility brands and find the ride that
                feels right for you.
              </p>

              <a
                href="#collections"
                className="mt-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:text-sky-300"
              >
                Explore collections
                <ArrowDown className="h-4 w-4 text-sky-300 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>
          </div>

          {/* Editorial stats */}
          <div className="brands-reveal mt-16 grid grid-cols-2 border-y border-white/10 py-5 sm:mt-20 sm:grid-cols-4 sm:py-7">
            <div className="border-r border-white/10 pr-4 sm:px-6">
              <p className="text-2xl font-medium tracking-tight sm:text-3xl">
                04
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/40 sm:text-[10px]">
                Featured brands
              </p>
            </div>

            <div className="pl-5 sm:px-6">
              <p className="text-2xl font-medium tracking-tight sm:text-3xl">
                31
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/40 sm:text-[10px]">
                Listed models
              </p>
            </div>

            <div className="mt-5 border-r border-white/10 pr-4 sm:mt-0 sm:border-l sm:px-6">
              <p className="text-2xl font-medium tracking-tight sm:text-3xl">
                EV
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/40 sm:text-[10px]">
                Electric mobility
              </p>
            </div>

            <div className="mt-5 pl-5 sm:mt-0 sm:border-l sm:px-6">
              <p className="text-2xl font-medium tracking-tight sm:text-3xl">
                01
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/40 sm:text-[10px]">
                Destination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand collections */}
      <section
        id="collections"
        className="relative z-10 scroll-mt-28 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4 sm:mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-sky-300">
                Choose your direction
              </p>
              <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-4xl">
                The collections
              </h2>
            </div>

            <span className="pb-1 text-xs text-white/35">
              01 — 04 / Brands
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            {brands.map((brand, index) => (
              <article
                key={brand.slug}
                className={`brand-card group relative isolate overflow-hidden rounded-2xl border border-white/[0.09] bg-[#10151D] transition-colors duration-500 hover:border-white/25 ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* Brand atmosphere */}
                <div
                  className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full opacity-[0.12] blur-[100px] transition-opacity duration-700 group-hover:opacity-30"
                  style={{ backgroundColor: brand.accent }}
                />

                <div
                  className={`relative grid h-full ${
                    index === 0
                      ? 'lg:min-h-[390px] lg:grid-cols-[0.85fr_1.15fr]'
                      : 'grid-rows-[235px_1fr] sm:grid-rows-[290px_1fr]'
                  }`}
                >
                  {/* Product image */}
                  <div
                    className={`relative overflow-hidden bg-[#0B1017] ${
                      index === 0
                        ? 'min-h-[260px] lg:order-2 lg:min-h-[390px]'
                        : ''
                    }`}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 z-10"
                      style={{
                        background:
                          index === 0
                            ? 'linear-gradient(90deg, #10151D 0%, transparent 45%), linear-gradient(0deg, #10151D 0%, transparent 30%)'
                            : 'linear-gradient(0deg, #10151D 0%, rgba(16,21,29,0.1) 55%, rgba(16,21,29,0.05) 100%)',
                      }}
                    />

                    <img
                      src={brand.image}
                      alt={`${brand.name} electric mobility collection`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="absolute inset-0 h-full w-full object-contain p-5 transition-transform duration-700 ease-out group-hover:scale-[1.055] sm:p-8"
                    />

                    <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md sm:left-7 sm:top-7">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: brand.accent }}
                      />
                      <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/75">
                        {brand.category}
                      </span>
                    </div>

                    <span className="pointer-events-none absolute bottom-4 right-5 z-20 text-6xl font-medium tracking-[-0.08em] text-white/[0.07] sm:bottom-5 sm:right-7 sm:text-8xl">
                      {brand.number}
                    </span>
                  </div>

                  {/* Brand information */}
                  <div
                    className={`relative flex flex-col p-6 sm:p-8 lg:p-9 ${
                      index === 0 ? 'lg:order-1 lg:justify-center' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p
                        className="text-[10px] uppercase tracking-[0.22em]"
                        style={{ color: brand.accent }}
                      >
                        {brand.label}
                      </p>

                      <span className="text-[10px] text-white/35">
                        {String(brand.bikeCount).padStart(2, '0')} MODELS
                      </span>
                    </div>

                    <h3
                      className={`font-editorial mt-5 font-medium leading-none tracking-[-0.06em] ${
                        index === 0
                          ? 'text-6xl sm:text-7xl lg:text-[88px]'
                          : 'text-5xl sm:text-6xl'
                      }`}
                    >
                      {brand.name}
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
                      {brand.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-3">
                      {brand.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 text-[10px] text-white/60 sm:text-[11px]"
                        >
                          <Check
                            className="h-3 w-3"
                            style={{ color: brand.accent }}
                          />
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/brands/${brand.slug}`}
                      aria-label={`Explore the ${brand.name} collection`}
                      className="mt-8 inline-flex min-h-12 w-full items-center justify-between border-t border-white/10 pt-5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:text-sky-300"
                    >
                      <span>Explore collection</span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-sky-300 group-hover:bg-sky-300 group-hover:text-[#080B10]">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brand philosophy */}
      <section className="relative z-10 border-t border-slate-200 bg-white dark:border-white/[0.08] dark:bg-[#0B0F15] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <Zap className="h-4 w-4 text-sky-300" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-sky-300">
                  The showroom difference
                </p>
              </div>

              <h2 className="mt-6 max-w-lg text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-6xl">
                More than a ride.
                <span className="font-editorial mt-1 block italic text-white/45">
                  A better way forward.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                Every rider has a different destination. Explore our
                collections to find the electric mobility option that suits
                your lifestyle.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {benefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="group grid grid-cols-[42px_1fr_24px] items-start gap-4 py-6 sm:grid-cols-[56px_1fr_24px] sm:py-8"
                >
                  <span className="pt-1 text-xs text-sky-300/70">
                    {benefit.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-medium tracking-tight transition-colors duration-300 group-hover:text-sky-300 sm:text-xl">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-white/40">
                      {benefit.description}
                    </p>
                  </div>

                  <ArrowUpRight className="mt-1 h-4 w-4 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative z-10 overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.12] blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-sky-300">
            Your next journey starts here
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Ready to find
            <span className="font-editorial mt-1 block italic text-sky-300">
              your electric?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/45">
            Explore the collections, compare your options and discover your
            next electric ride.
          </p>

          <Link
            to="/"
            className="group mx-auto mt-9 inline-flex min-h-12 items-center gap-5 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#080B10] transition-colors duration-300 hover:bg-sky-300"
          >
            Back to showroom
            <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Page animations */}
      <style>{`
        @keyframes brandsReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 22px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .brands-reveal {
          animation: brandsReveal 850ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .editorial-title {
          font-family: var(--font-modern, 'Manrope', sans-serif);
          font-size: clamp(3.5rem, 8.5vw, 8rem);
          font-weight: 500;
          line-height: 0.98;
          letter-spacing: -0.075em;
        }

        .editorial-line {
          display: block;
          overflow: hidden;
          padding-bottom: 0.08em;
        }

        .editorial-word {
          display: inline-block;
          animation: editorialEntrance 1100ms
            cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: var(--delay, 0ms);
        }

        .brand-card {
          animation: brandsReveal 850ms
            cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes editorialEntrance {
          from {
            opacity: 0;
            transform: translate3d(0, 110%, 0);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: blur(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brands-reveal,
          .editorial-word,
          .brand-card {
            animation: none !important;
            opacity: 1;
            filter: none;
            transform: none;
          }

          .brands-page *,
          .brands-page *::before,
          .brands-page *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Brands;
