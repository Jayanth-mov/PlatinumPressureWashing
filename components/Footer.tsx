export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div style={{ maxWidth: 320 }}>
            <a href="#top" className="brand" style={{ marginBottom: 18 }}>
              <svg className="mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <path d="M32 3l25 9v18c0 14.5-10.2 27-25 31C17.2 57 7 44.5 7 30V12l25-9z" fill="#fff" opacity=".12" />
                <path d="M32 8l20 7.2V30c0 11.8-8.2 22-20 25.4C20.2 52 12 41.8 12 30V15.2L32 8z" fill="url(#navMetal)" />
                <path d="M32 20c-4 5.4-7 9.6-7 13.4a7 7 0 0014 0c0-3.8-3-8-7-13.4z" fill="var(--aqua-500)" />
              </svg>
              <span className="name">
                <span className="t1">PLATINUM</span>
                <span className="t2">Pressure Washing</span>
              </span>
            </a>
            <p style={{ fontSize: 14, color: "var(--plat-400)" }}>
              Premium exterior cleaning for homes and businesses across Frisco and North DFW.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Services</h4>
              <a href="#how">Driveways &amp; concrete</a>
              <a href="#how">House &amp; siding</a>
              <a href="#how">Decks &amp; patios</a>
              <a href="#how">Commercial</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#how">How it works</a>
              <a href="#reviews">Reviews</a>
              <a href="#quote">Get a quote</a>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="tel:+14694965525">(469) 496-5525</a>
              <a href="mailto:Contact@PlatinumPressureWashing.pro">Contact@PlatinumPressureWashing.pro</a>
              <p>Frisco, TX &amp; surrounding areas</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Platinum Pressure Washing. All rights reserved.</span>
          <span>Licensed &amp; insured &middot; Frisco, TX</span>
        </div>
      </div>
    </footer>
  );
}
