import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div style={{ maxWidth: 320 }}>
            <a href="#top" className="brand" style={{ marginBottom: 18 }}>
              <Image
                className="mark"
                src="/logo.png"
                alt="Platinum Pressure Washing logo"
                width={42}
                height={42}
              />
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
              <a href="#quote">Driveways &amp; concrete</a>
              <a href="#quote">House &amp; siding</a>
              <a href="#quote">Decks &amp; patios</a>
              <a href="#quote">Commercial</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#results">Results</a>
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
