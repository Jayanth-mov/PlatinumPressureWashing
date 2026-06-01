"use client";

import { motion } from "framer-motion";

const Star = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#f5a623">
    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: "url('/hero.png')" }}
      />
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Frisco, TX &amp; surrounding areas</span>
          <h1>
            Your driveway&apos;s embarrassing you.
            <br />
            <span className="shine">Let&apos;s fix that this week.</span>
          </h1>
          <p className="lead">
            We've been providing professional pressure washing for driveways, siding, decks, and commercial
            properties since 2023.
          </p>
          <div className="hero-actions">
            <a href="#quote" className="btn btn-primary">
              Book a free quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#how" className="btn btn-ghost">See how it works</a>
          </div>
          <div className="hero-trust">
            <span className="stars" aria-label="5 out of 5 stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
            <div>
              <div className="rate-num">4.9 / 5.0</div>
            </div>
            <span className="divider-dot" />
            <div>
              <div className="rate-num">100% Satisfaction</div>
              <div className="rate-sub">or we re-clean free</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
