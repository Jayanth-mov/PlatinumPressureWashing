"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const services = [
  {
    title: "Driveways & concrete",
    body: "Oil stains, mildew and years of grime lifted to reveal bright, even concrete.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="14" width="18" height="7" rx="1.5" fill="var(--aqua-600)" />
        <path d="M5 14l3-9h8l3 9" stroke="var(--navy-700)" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 5v9M14 5v9" stroke="var(--navy-700)" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "House & siding",
    body: "Gentle soft-washing that strips dirt and algae without harming your finish.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 10l8-6 8 6v9a1 1 0 01-1 1H5a1 1 0 01-1-1z" fill="var(--aqua-100)" stroke="var(--navy-700)" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 20v-5h6v5" stroke="var(--navy-700)" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Decks & patios",
    body: "Wood, composite and pavers restored — safe to walk barefoot again.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 17h18M5 17v-6m4 6v-6m6 6v-6m4 6v-6M3 11l9-5 9 5" stroke="var(--navy-700)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Commercial",
    body: "Storefronts, lots and building exteriors kept presentable on your schedule.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="3" width="14" height="18" rx="1.2" fill="var(--aqua-100)" stroke="var(--navy-700)" strokeWidth="1.6" />
        <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" stroke="var(--navy-700)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const steps = [
  {
    n: "1",
    title: "Request your quote",
    body: "Drop your address and a photo. We'll send your price back today, usually within a few hours.",
    badge: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M5 8h14M5 8v11a1 1 0 001 1h12a1 1 0 001-1V8M5 8l1-4h12l1 4M9 4v4M15 4v4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "2",
    title: "We arrive & wash",
    body: "Our  crew shows up on time with pro equipment and treats every surface accordingly.",
    badge: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M3 13l4-2 5 5 7-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "3",
    title: "Walk out to a clean property",
    body: "If anything's not right, call us. We come back and fix it.",
    badge: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 20.5l1.4-6.8L2.2 10l6.9-.7z" fill="#fff" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section" id="how">
      <div className="container">
        <Reveal className="section-head">
          <h2>Here&apos;s how it works</h2>
          <p>No deposits, no surprises. Just a clear quote and a job done right.</p>
        </Reveal>
        <div className="steps">
          <div className="connector" />
          {steps.map((s, i) => (
            <Reveal className="step" key={s.n} delay={i * 0.12}>
              <div className="num">
                <span>{s.n}</span>
                <div className="badge-ico">{s.badge}</div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="svc-toggle-wrap">
          <button
            className="svc-toggle"
            aria-expanded={open}
            aria-controls="svcReveal"
            onClick={() => setOpen((o) => !o)}
          >
            <span>What we clean</span>
            <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="svcReveal"
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 38 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className="svc-grid">
                {services.map((svc) => (
                  <div className="svc-card" key={svc.title}>
                    <div className="svc-ico">{svc.icon}</div>
                    <h3>{svc.title}</h3>
                    <p>{svc.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
