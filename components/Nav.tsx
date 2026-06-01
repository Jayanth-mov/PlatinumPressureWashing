"use client";

import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Platinum Pressure Washing home">
          <Image
            className="mark"
            src="/logo.png"
            alt="Platinum Pressure Washing logo"
            width={56}
            height={56}
            priority
          />
          <span className="name">
            <span className="t1">PLATINUM</span>
            <span className="t2">Pressure Washing</span>
          </span>
        </a>
        <nav className={`nav-links${open ? " open" : ""}`} onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setOpen(false);
        }}>
          <a href="#results">Results</a>
          <a href="#reviews">Reviews</a>
          <a href="#quote" className="nav-cta">Book now</a>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16" stroke="var(--navy-800)" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M4 12h16" stroke="var(--navy-800)" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M4 17h16" stroke="var(--navy-800)" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
