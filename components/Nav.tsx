"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Platinum Pressure Washing home">
          <svg className="mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="navMetal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#f3f6f9" />
                <stop offset=".3" stopColor="#cfd8e0" />
                <stop offset=".55" stopColor="#9aa7b4" />
                <stop offset="1" stopColor="#eef2f6" />
              </linearGradient>
            </defs>
            <path d="M32 3l25 9v18c0 14.5-10.2 27-25 31C17.2 57 7 44.5 7 30V12l25-9z" fill="var(--navy-800)" />
            <path d="M32 8l20 7.2V30c0 11.8-8.2 22-20 25.4C20.2 52 12 41.8 12 30V15.2L32 8z" fill="url(#navMetal)" />
            <path d="M32 20c-4 5.4-7 9.6-7 13.4a7 7 0 0014 0c0-3.8-3-8-7-13.4z" fill="var(--aqua-600)" />
          </svg>
          <span className="name">
            <span className="t1">PLATINUM</span>
            <span className="t2">Pressure Washing</span>
          </span>
        </a>
        <nav className={`nav-links${open ? " open" : ""}`} onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setOpen(false);
        }}>
          <a href="#how">How it works</a>
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
