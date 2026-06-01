import Reveal from "./Reveal";

export default function BeforeAfter() {
  return (
    <section className="section beforeafter" id="results">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">See the difference</span>
          <h2>Before &amp; after, side by side</h2>
          <p>Real results we deliver across Frisco — watch the grime lift away.</p>
        </Reveal>
        <div className="ba-grid">
          <Reveal as="figure" className="ba-vid">
            <video autoPlay loop muted playsInline preload="auto">
              <source src="/before.mp4" type="video/mp4" />
            </video>
            <figcaption className="ba-tag tag-before">Before</figcaption>
          </Reveal>
          <Reveal as="figure" className="ba-vid" delay={0.12}>
            <video autoPlay loop muted playsInline preload="auto">
              <source src="/after.mp4" type="video/mp4" />
            </video>
            <figcaption className="ba-tag tag-after">After</figcaption>
          </Reveal>
        </div>
        <div className="ba-badges">
          <div className="badge-float">
            <div className="ico" style={{ background: "var(--aqua-100)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8 7 6 10 6 13a6 6 0 0012 0c0-3-2-6-6-11z" fill="var(--aqua-600)" />
              </svg>
            </div>
            <div>
              <div className="bt">Local &amp; trusted</div>
              <div className="bs">Serving Frisco daily</div>
            </div>
          </div>
          <div className="badge-float">
            <div className="ico" style={{ background: "var(--navy-800)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5l8-3z" fill="#fff" opacity=".15" />
                <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="bt">Satisfaction</div>
              <div className="bs">guaranteed, every job</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
