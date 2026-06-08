import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Platinum Pressure Washing",
  description:
    "How Platinum Pressure Washing collects, uses, and protects the information you share when you request a quote.",
};

const EFFECTIVE_DATE = "June 7, 2026";

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <header className="legal-nav">
        <div className="container legal-nav-inner">
          <Link href="/" className="brand" aria-label="Platinum Pressure Washing home">
            <Image
              className="mark"
              src="/logo.png"
              alt="Platinum Pressure Washing logo"
              width={48}
              height={48}
            />
            <span className="name">
              <span className="t1">PLATINUM</span>
              <span className="t2">Pressure Washing</span>
            </span>
          </Link>
          <Link href="/" className="legal-back">
            ← Back to site
          </Link>
        </div>
      </header>

      <section className="legal-hero">
        <div className="legal-hero-overlay" />
        <div className="container legal-hero-inner">
          <p className="eyebrow">Legal</p>
          <h1>
            Privacy <span className="shine">Policy</span>
          </h1>
          <p className="legal-hero-sub">
            How we collect, use, and protect the information you share when you request a quote.
          </p>
          <p className="legal-updated">Effective date: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <main className="legal-shell">
        <div className="container">
          <article className="legal-body">
        <p>
          Platinum Pressure Washing (&ldquo;Platinum Pressure Washing,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates this website and provides exterior
          cleaning services in Frisco, Texas and the surrounding North DFW area. This Privacy Policy
          explains what information we collect when you use our website or request a quote, how we
          use it, and the choices you have. By using our website or submitting a quote request, you
          agree to the practices described here.
        </p>

        <h2>Information we collect</h2>
        <p>
          We only collect information you choose to give us. When you submit our quote request form,
          we may collect:
        </p>
        <ul>
          <li>
            <strong>Contact details</strong> — your name, phone number, and email address.
          </li>
          <li>
            <strong>Business information</strong> — a company name, if you provide one.
          </li>
          <li>
            <strong>Service details</strong> — the service address you want cleaned, the services
            you&apos;re interested in, and any notes you add about the job.
          </li>
          <li>
            <strong>Photos</strong> — any optional images of the area you upload to help us prepare
            a quote.
          </li>
        </ul>
        <p>
          We do not require you to create an account, and we do not knowingly collect information
          from anyone under the age of 18.
        </p>

        <h2>How we use your information</h2>
        <p>We use the information you provide to:</p>
        <ul>
          <li>Prepare and send you a quote for the services you requested;</li>
          <li>Contact you by phone, text, or email about your request and to schedule work;</li>
          <li>Provide the cleaning services you book with us; and</li>
          <li>Respond to your questions and provide customer support.</li>
        </ul>
        <p>
          We do not use your information for unrelated marketing, and we do not sell or rent your
          personal information to anyone.
        </p>

        <h2>How your information is shared</h2>
        <p>
          We keep your information private and share it only as needed to run our business. Your
          quote request is delivered to our team by email and as a phone notification through the
          following service providers, who process the data on our behalf:
        </p>
        <ul>
          <li>
            <strong>Resend</strong> — delivers your quote request to our email inbox.
          </li>
          <li>
            <strong>Pushover</strong> — sends a mobile notification so we can respond quickly.
          </li>
          <li>
            <strong>Vercel</strong> — hosts this website and processes form submissions.
          </li>
        </ul>
        <p>
          These providers are only permitted to use your information to provide their services to
          us. We may also disclose information if required by law, to enforce our agreements, or to
          protect the rights, safety, and property of Platinum Pressure Washing, our customers, or
          others.
        </p>

        <h2>Text messages</h2>
        <p>
          If you provide a phone number, you agree that we may contact you by phone or text message
          about your quote and service. Standard message and data rates may apply. You can ask us to
          stop contacting you at any time by replying STOP to a text or by contacting us using the
          details below.
        </p>

        <h2>Data retention</h2>
        <p>
          We keep quote requests and related communications only as long as needed to respond to
          your request, provide our services, and keep reasonable business records. You can ask us
          to delete your information at any time, and we will do so unless we are required to keep it
          by law.
        </p>

        <h2>How we protect your information</h2>
        <p>
          We take reasonable measures to protect the information you share with us. Our website is
          served over a secure (HTTPS) connection. No method of transmission or storage is completely
          secure, however, so we cannot guarantee absolute security.
        </p>

        <h2>Your choices and rights</h2>
        <p>
          You can request to access, correct, or delete the personal information you&apos;ve shared
          with us, and you can opt out of further contact at any time. To make a request, contact us
          using the information below and we&apos;ll respond promptly.
        </p>

        <h2>Cookies and analytics</h2>
        <p>
          Our website uses only the cookies and similar technologies needed for the site to function
          properly. We do not use third-party advertising trackers.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we&apos;ll revise the
          effective date at the top of this page. Your continued use of our website after a change
          means you accept the updated policy.
        </p>

        <h2>Contact us</h2>
        <p>
          If you have questions about this Privacy Policy or how we handle your information, please
          reach out:
        </p>
        <ul className="legal-contact">
          <li>
            <strong>Platinum Pressure Washing</strong>
          </li>
          <li>Frisco, TX &amp; surrounding areas</li>
          <li>
            Phone: <a href="tel:+14694965525">(469) 496-5525</a>
          </li>
          <li>
            Email:{" "}
            <a href="mailto:Contact@PlatinumPressureWashing.pro">
              Contact@PlatinumPressureWashing.pro
            </a>
          </li>
        </ul>
          </article>
        </div>
      </main>

      <footer className="legal-foot">
        <div className="container">
          <span>&copy; 2026 Platinum Pressure Washing. All rights reserved.</span>
          <Link href="/">Return to home</Link>
        </div>
      </footer>
    </div>
  );
}
