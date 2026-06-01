import Reveal from "./Reveal";

const Stars = () => (
  <span className="stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#f5a623">
        <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 20.5l1.4-6.8L2.2 9l6.9-.7z" />
      </svg>
    ))}
  </span>
);

const reviews = [
  {
    quote:
      '"Our driveway looked brand new. They were on time, polite, and the price was exactly what they quoted. Couldn\'t be happier."',
    initials: "SM",
    name: "Sarah M.",
    location: "Frisco, TX",
  },
  {
    quote:
      '"We use Platinum for our storefront every quarter. Reliable, professional, and the building always looks sharp for customers."',
    initials: "DR",
    name: "David R.",
    location: "Plano, TX",
  },
  {
    quote:
      '"Booked a deck and patio clean — the wood looks years younger. Quick quote from a photo and zero hassle. Highly recommend."',
    initials: "JL",
    name: "Jenna L.",
    location: "McKinney, TX",
  },
];

export default function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow" style={{ color: "var(--aqua-400)" }}>
            Neighbors love us
          </span>
          <h2>Trusted across Frisco</h2>
          <p>Real results from real local homeowners and businesses.</p>
        </Reveal>
        <div className="rev-grid">
          {reviews.map((r, i) => (
            <Reveal className="rev-card" key={r.name} delay={i * 0.12}>
              <Stars />
              <p className="quote">{r.quote}</p>
              <div className="who">
                <div className="av">{r.initials}</div>
                <div>
                  <div className="nm">{r.name}</div>
                  <div className="lo">{r.location}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
