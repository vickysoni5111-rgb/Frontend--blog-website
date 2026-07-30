"use client";

import { useMemo, useState } from "react";
import {
  Wallet,
  UserCheck,
  Tag,
  CalendarDays,
  ArrowRight,
  ShieldCheck,
  Star,
  Users,
  Route,
  FileCheck2,
  ClipboardList,
  BadgeCheck,
  Rocket,
  ChevronDown,
} from "lucide-react";


import car2 from "./assets/car2.png";
import taxi from "./assets/taxi.png";
import car from "./assets/car.png";
import carpic from "./assets/carpic.png";
import delhiBg from "./assets/delhi.png";



type Segment = "hatchback" | "sedan" | "suv" | "luxury";

const SEGMENTS: {
  id: Segment;
  label: string;
  examples: string;
  dailyRate: number;
}[] = [
  { id: "hatchback", label: "Hatchback", examples: "Swift, i20", dailyRate: 2500 },
  { id: "sedan", label: "Sedan", examples: "City, Verna", dailyRate: 3200 },
  { id: "suv", label: "SUV", examples: "Creta, Thar", dailyRate: 4500 },
  { id: "luxury", label: "Luxury", examples: "Audi, BMW", dailyRate: 7000 },
];

const PARTNER_SHARE = 0.85;

const WHY_PARTNER = [
  {
    icon: Wallet,
    title: "85% Earnings Share",
    body: "Keep the majority of every trip value while we manage support, operations, and marketing.",
  },
  {
    icon: UserCheck,
    title: "Verified Riders",
    body: "Every rider booking is backed by verified contact details and platform support.",
  },
  {
    icon: Tag,
    title: "Zero Listing Fees",
    body: "List for free and pay commission only when a successful cab booking is completed.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Control",
    body: "Block dates, manage pricing, and customise pickup rules directly from your partner dashboard.",
  },
];

const STATS = [
  { icon: Users, value: "500+", label: "Verified partners" },
  { icon: Route, value: "12,000+", label: "Trips completed" },
  { icon: Star, value: "4.8+", label: "Average rating" },
  { icon: Wallet, value: "85%", label: "Partner revenue share" },
];

const STEPS = [
  {
    icon: ClipboardList,
    title: "Submit KYC",
    body: "Upload Aadhaar, PAN, driving licence, and bank details for a quick review.",
  },
  {
    icon: FileCheck2,
    title: "List Your Cab",
    body: "Add specifications, pricing, location, RC, and insurance documents.",
  },
  {
    icon: BadgeCheck,
    title: "Admin Verification",
    body: "Our team verifies cab details, RC, insurance, and images.",
  },
  {
    icon: Rocket,
    title: "Go Live & Earn",
    body: "Start accepting bookings and track every payout from the partner dashboard.",
  },
];

const FAQS = [
  {
    q: "Who is responsible if my car gets traffic fines or damages?",
    a: "Traffic fines linked to the vehicle remain the partner's responsibility. Damages during a verified trip are covered under our trip protection policy; outside of a booked trip, your own vehicle insurance applies.",
  },
  {
    q: "What documents are required to list my car?",
    a: "You'll need Aadhaar, PAN, a valid driving licence, bank account details for payouts, the vehicle RC, and current insurance documents.",
  },
  {
    q: "How and when do I get paid?",
    a: "Payouts are credited directly to your registered bank account on a weekly cycle. You can track every trip and payout in real time from the partner dashboard.",
  },
  {
    q: "Can I use my car for personal trips while listing it?",
    a: "Yes. Simply block those dates in your partner dashboard and the car will be marked unavailable for bookings during that time.",
  },
];

const GALLERY = [
  {
    src: taxi,
    alt: "Taxi partner car",
    title: "Ready for Every Ride",
    body: "Reliable cabs vetted for comfort and safety, out on the road every single day.",
  },
  {
    src: car,
    alt: "Partner car on the road",
    title: "Everyday City Rides",
    body: "From daily commutes to airport drops, partner cars keep Delhi NCR moving.",
  },
  {
    src: carpic,
    alt: "Verified partner listing",
    title: "Verified & Listed",
    body: "Every listing carries a verified badge so riders can book with confidence.",
  },
  {
    src: car2,
    alt: "Partner car parked",
    title: "Earning On Autopilot",
    body: "Partners track live bookings and payouts straight from their dashboard.",
  },
];

function formatINR(value: number) {
  return `INR ${Math.round(value).toLocaleString("en-IN")}`;
}



function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-[#E2E6EC] bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-[#0F1B2A]">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#0E3A63] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-6 text-sm leading-relaxed text-[#0F1B2A]/65">
          <p className="pb-5">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function ListCar() {
  const [segment, setSegment] = useState<Segment>("suv");
  const [bookedDays, setBookedDays] = useState(26);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const active = useMemo(
    () => SEGMENTS.find((s) => s.id === segment)!,
    [segment]
  );

  const grossBookingValue = active.dailyRate * bookedDays;
  const netPayout = grossBookingValue * PARTNER_SHARE;
  const platformSharePct = Math.round((1 - PARTNER_SHARE) * 100);

  const dialCeiling = 220000;
  const dialPct = Math.min(netPayout / dialCeiling, 1);
  const dialAngle = -120 + dialPct * 240;

  return (
    <div className="font-body min-h-screen bg-[#F5F7FA] text-[#0F1B2A]">

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540] via-[#0A2540] to-[#F5F7FA]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FBBF24]/40 bg-[#FBBF24]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#FBBF24]">
                Partner Program · Delhi NCR
              </span>

              <h1 className="font-display mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
                Earn more from your car,
                <br />
                without giving up{" "}
                <span className="relative inline-block">
                  control
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="10"
                    viewBox="0 0 200 10"
                    preserveAspectRatio="none"
                  >
                  
                  </svg>
                </span>
                .
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
                List with India&apos;s trusted online taxi booking platform.
                Earn up to <strong className="text-white">INR 1,20,000 a month</strong>{" "}
                with verified riders, flexible availability, and transparent
                payouts.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/dashboard"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#FBBF24] px-6 py-3.5 text-sm font-bold text-[#0A2540] shadow-lg transition hover:bg-[#FB923C]"
                >
                  Go to Partner Dashboard
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white/50"
                >
                  Estimate Earnings
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/50">
                <span>No listing fees</span>
                <span>Verified riders</span>
                <span>85% partner share</span>
                <span>Dashboard control</span>
              </div>
            </div>

            {/* Hero image card */}
            <div className="relative">
              <div className="absolute -left-3 -top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-[#0A2540] px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                <ShieldCheck className="h-3.5 w-3.5 text-[#FBBF24]" />
                Verified Partner Listing
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-xl">
                <img
                  src={car2}
                  alt="Partner car listed on BookACabNow"
                  className="h-64 w-full object-cover md:h-80"
                />

                <div className="grid grid-cols-3 divide-x divide-[#E2E6EC] border-t border-[#E2E6EC]">
                  <div className="bg-[#0E3A63] px-4 py-4 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-white/70">
                      Estimated Payout
                    </p>
                    <p className="font-display mt-1 text-lg font-bold">
                      INR 48,450
                    </p>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-[#0F1B2A]/50">
                      Partner Share
                    </p>
                    <p className="font-display mt-1 text-lg font-bold">85%</p>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-[#0F1B2A]/50">
                      Booking Days
                    </p>
                    <p className="font-display mt-1 text-lg font-bold">15</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ---------------------------------------------------------------- */}
      {/* STATS STRIP (navy dark)                                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-[#0A2540] py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:divide-x md:divide-white/10">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center md:px-4">
              <Icon className="mb-2 h-5 w-5 text-[#FBBF24]" />
              <p className="font-display text-3xl font-extrabold text-white">
                {value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/50">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

 
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0F1B2A] md:text-4xl">
          Why Partner with BookACabNow?
        </h2>
        <p className="mt-3 max-w-xl text-[#0F1B2A]/60">
          Everything you need to run a profitable, hassle-free listing —
          built around the partner, not the platform.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_PARTNER.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[#E2E6EC] bg-white p-6 transition hover:-translate-y-1 hover:border-[#FB923C]/40 hover:shadow-lg"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E3A63]/10 text-[#0E3A63] transition group-hover:bg-[#FBBF24] group-hover:text-[#0A2540]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display mt-4 text-lg font-bold text-[#0F1B2A]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0F1B2A]/60">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* DELHI LOCATION BANNER                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative mx-6 overflow-hidden rounded-3xl md:mx-auto md:max-w-6xl">
        {/* Blurred backdrop fills the frame so there are no empty bars */}
        <img
          src={delhiBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-2xl"
        />
        {/* Full, uncropped image sits on top */}
        <img
          src={delhiBg}
          alt="Delhi skyline"
          className="relative h-64 w-full object-contain md:h-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/85 via-[#0A2540]/35 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#FBBF24]/40 bg-[#FBBF24]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#FBBF24]">
            Now Live
          </span>
          <h3 className="font-display mt-4 max-w-md text-2xl font-extrabold leading-tight text-white md:text-3xl">
            Proudly serving Delhi NCR
          </h3>
          <p className="mt-2 max-w-sm text-sm text-white/70 md:text-base">
            From Connaught Place to the airport — partner cabs are already on
            the road, earning every day.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* SIMPLE 4-STEP PROCESS                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0F1B2A] md:text-4xl">
          Simple 4-step process
        </h2>
        <p className="mt-3 max-w-xl text-[#0F1B2A]/60">
          From KYC to your first payout — a clear, guided path to going live.
        </p>

        <div className="relative mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting dashed line for desktop */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-[2px] lg:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #0E3A63 0 10px, transparent 10px 20px)",
              opacity: 0.25,
            }}
          />

          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <div key={title} className="relative flex flex-col items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0E3A63] text-sm font-bold text-white ring-4 ring-[#F5F7FA] transition hover:bg-[#FB923C] hover:text-[#0A2540]">
                {i + 1}
              </div>
              <div className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0E3A63]/10 text-[#0E3A63]">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <h3 className="font-display mt-3 text-lg font-bold text-[#0F1B2A]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0F1B2A]/60">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* GALLERY — one card per car                                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0F1B2A] md:text-4xl">
            Cars already on the road
          </h2>
          <p className="mt-2 text-sm text-[#0F1B2A]/60">
            A glimpse of partner cars currently earning on BookACabNow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY.map(({ src, alt, title, body }) => (
            <div
              key={alt}
              className="group overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white transition hover:-translate-y-1 hover:border-[#FB923C]/40 hover:shadow-lg"
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={src}
                  alt={alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-[#0F1B2A]">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#0F1B2A]/60">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* EARNINGS CALCULATOR                                               */}
      {/* ---------------------------------------------------------------- */}
      <section id="calculator" className="mx-auto max-w-6xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl border border-[#E2E6EC] bg-white shadow-sm md:grid md:grid-cols-2">
          {/* Left: inputs */}
          <div className="p-8 md:p-10">
            <span className="inline-flex rounded-full border border-[#FB923C]/40 bg-[#FB923C]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#B15B0F]">
              Estimate Earnings
            </span>
            <h3 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-[#0F1B2A]">
              Calculate your earnings
            </h3>
            <p className="mt-2 text-sm text-[#0F1B2A]/60">
              Choose your cab segment and likely monthly cab booking days.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {SEGMENTS.map((s) => {
                const isActive = s.id === segment;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSegment(s.id)}
                    className={`rounded-xl border px-4 py-3 text-left transition ${
                      isActive
                        ? "border-[#0E3A63] bg-[#0E3A63]/5 ring-1 ring-[#0E3A63]"
                        : "border-[#E2E6EC] hover:border-[#FB923C]/50"
                    }`}
                  >
                    <p className="font-semibold text-[#0F1B2A]">{s.label}</p>
                    <p className="text-xs text-[#0F1B2A]/50">{s.examples}</p>
                  </button>
                );
              })}
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-[#0F1B2A]">
                  Booked days per month
                </span>
                <span className="font-display font-bold text-[#0E3A63]">
                  {bookedDays} days
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                value={bookedDays}
                onChange={(e) => setBookedDays(Number(e.target.value))}
                className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#E2E6EC] accent-[#0E3A63]"
              />
              <div className="mt-1 flex justify-between text-xs text-[#0F1B2A]/40">
                <span>1 day</span>
                <span>15 days</span>
                <span>30 days</span>
              </div>
            </div>
          </div>

          {/* Right: payout panel with speedometer dial */}
          <div className="relative bg-[#0A2540] p-8 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Estimated Net Payout
            </p>

            <div className="mt-4 flex items-center gap-6">
              <div className="relative h-28 w-28 shrink-0">
                <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                    strokeDasharray="197 264"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#FBBF24"
                    strokeWidth="8"
                    strokeDasharray={`${dialPct * 197} 264`}
                    strokeLinecap="round"
                  />
                </svg>
                <div
                  className="absolute left-1/2 top-1/2 h-10 w-[3px] origin-bottom -translate-x-1/2 -translate-y-full rounded-full bg-white transition-transform duration-300"
                  style={{ transform: `translate(-50%, -100%) rotate(${dialAngle}deg)` }}
                />
                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              </div>

              <p className="font-display text-4xl font-extrabold leading-none md:text-5xl">
                {formatINR(netPayout)}
              </p>
            </div>

            <p className="mt-3 text-xs text-white/50">
              Based on {Math.round(PARTNER_SHARE * 100)}% of trip revenue.
              Actual earnings vary by demand, pricing, and location.
            </p>

            <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-white/60">Gross booking value</span>
                <span className="font-semibold">
                  {formatINR(grossBookingValue)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Platform share</span>
                <span className="font-semibold">{platformSharePct}%</span>
              </div>
            </div>

            <a
              href="/dashboard"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FBBF24] px-6 py-3.5 text-sm font-bold text-[#0A2540] transition hover:bg-[#FB923C]"
            >
              Start Listing Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>


      {/* ---------------------------------------------------------------- */}
      {/* SUPPORT / FAQ                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <span className="inline-flex rounded-full border border-[#0E3A63]/20 bg-[#0E3A63]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0E3A63]">
          Support
        </span>
        <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-[#0F1B2A] md:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-8 space-y-3">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              isOpen={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? null : i)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

