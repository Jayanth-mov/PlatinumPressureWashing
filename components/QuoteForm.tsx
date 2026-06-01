"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const MAX_PHOTOS = 5;

interface FieldErrors {
  name?: boolean;
  phone?: boolean;
  email?: boolean;
  service?: boolean;
  address?: boolean;
}

interface PhotoItem {
  file: File;
  url: string;
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function QuoteForm() {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [dragging, setDragging] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function addFiles(list: FileList | null) {
    if (!list) return;
    setPhotos((prev) => {
      const next = [...prev];
      for (const f of Array.from(list)) {
        if (f.type.startsWith("image/") && next.length < MAX_PHOTOS) {
          next.push({ file: f, url: URL.createObjectURL(f) });
        }
      }
      return next;
    });
  }

  function removePhoto(index: number) {
    setPhotos((prev) => {
      const item = prev[index];
      if (item) URL.revokeObjectURL(item.url);
      return prev.filter((_, i) => i !== index);
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim() ?? "";
    const phone = (data.get("phone") as string) ?? "";
    const email = (data.get("email") as string)?.trim() ?? "";
    const service = (data.get("service") as string) ?? "";
    const address = (data.get("address") as string)?.trim() ?? "";
    const company = (data.get("company") as string)?.trim() ?? "";
    const notes = (data.get("notes") as string)?.trim() ?? "";

    const nextErrors: FieldErrors = {
      name: name.length < 2,
      phone: phone.replace(/\D/g, "").length < 10,
      email: email !== "" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email),
      service: !service,
      address: address.length < 5,
    };
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      const firstBad = form.querySelector(".field.invalid input, .field.invalid select");
      (firstBad as HTMLElement | null)?.focus();
      return;
    }

    setSubmitting(true);
    try {
      const photoPayload = await Promise.all(
        photos.map(async (p) => ({
          filename: p.file.name,
          content: (await fileToBase64(p.file)).split(",")[1],
          contentType: p.file.type,
        }))
      );

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, phone, email, service, address, notes, photos: photoPayload }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong sending your request.");
      }

      photos.forEach((p) => URL.revokeObjectURL(p.url));
      setSubmitted(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="section quote" id="quote">
      <div className="container">
        <Reveal className="quote-card">
          <aside className="quote-side">
            <span className="eyebrow" style={{ color: "var(--aqua-400)" }}>
              Free &bull; No obligation
            </span>
            <h2 style={{ marginTop: 14 }}>
              Request your
              <br />
              free quote
            </h2>
            <p>
              Send us your address and a quick photo of the area. We&apos;ll reply with a clear price —
              most quotes go out the same day.
            </p>
            <div className="qpoints">
              <div className="qpoint">
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4 10-10" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="qt">
                  <b>Same-day pricing</b>No waiting around for a callback.
                </span>
              </div>
              <div className="qpoint">
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4 10-10" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="qt">
                  <b>Upfront, honest rates</b>The quote is the price. No surprises.
                </span>
              </div>
              <div className="qpoint">
                <span className="ck">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4 10-10" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="qt">
                  <b>Satisfaction guaranteed</b>We re-clean free if you&apos;re not thrilled.
                </span>
              </div>
            </div>
            <div className="qcontact">
              <a href="tel:+14694965525">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 4h3l2 5-2 1a12 12 0 006 6l1-2 5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="var(--aqua-400)" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
                (469) 496-5525
              </a>
              <a href="mailto:Contact@PlatinumPressureWashing.pro">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6h18v12H3z" stroke="var(--aqua-400)" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M3 7l9 6 9-6" stroke="var(--aqua-400)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Contact@PlatinumPressureWashing.pro
              </a>
            </div>
          </aside>

          <div className="quote-form">
            {submitted ? (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="sc">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4 10-10" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Quote request sent!</h3>
                <p>
                  Thanks — we&apos;ve got your details. Expect a clear price from our Frisco team
                  shortly, usually the same day.
                </p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="fgrid">
                  <div className={`field full${errors.name ? " invalid" : ""}`}>
                    <label htmlFor="qn">
                      Full name <span className="req">*</span>
                    </label>
                    <input type="text" id="qn" name="name" placeholder="Jane Doe" />
                    <span className="err">Please enter your name.</span>
                  </div>
                  <div className="field full">
                    <label htmlFor="qc">
                      Company name{" "}
                      <span style={{ color: "var(--muted)", fontWeight: 600 }}>(if applicable)</span>
                    </label>
                    <input type="text" id="qc" name="company" placeholder="For commercial & property managers" />
                  </div>
                  <div className={`field${errors.phone ? " invalid" : ""}`}>
                    <label htmlFor="qp">
                      Phone <span className="req">*</span>
                    </label>
                    <input type="tel" id="qp" name="phone" placeholder="(469) 496-5525" />
                    <span className="err">Please enter a valid phone.</span>
                  </div>
                  <div className={`field${errors.email ? " invalid" : ""}`}>
                    <label htmlFor="qe">Email</label>
                    <input type="email" id="qe" name="email" placeholder="jane@email.com" />
                    <span className="err">Please enter a valid email.</span>
                  </div>
                  <div className={`field full${errors.service ? " invalid" : ""}`}>
                    <label htmlFor="qs">
                      Service needed <span className="req">*</span>
                    </label>
                    <select id="qs" name="service" defaultValue="">
                      <option value="" disabled>
                        Choose a service…
                      </option>
                      <option>Driveway &amp; concrete</option>
                      <option>House &amp; siding wash</option>
                      <option>Deck &amp; patio</option>
                      <option>Commercial property</option>
                      <option>Multiple / not sure</option>
                    </select>
                    <span className="err">Please choose a service.</span>
                  </div>
                  <div className={`field full${errors.address ? " invalid" : ""}`}>
                    <label htmlFor="qa">
                      Service address <span className="req">*</span>
                    </label>
                    <input type="text" id="qa" name="address" placeholder="123 Main St, Frisco, TX 75034" />
                    <span className="err">Please enter the service address.</span>
                  </div>
                  <div className="field full">
                    <label>
                      Add photos of the area{" "}
                      <span style={{ color: "var(--muted)", fontWeight: 600 }}>
                        (optional, helps us price faster)
                      </span>
                    </label>
                    <label
                      className={`dropzone${dragging ? " drag" : ""}`}
                      htmlFor="qfile"
                      onDragEnter={(e) => {
                        e.preventDefault();
                        setDragging(true);
                      }}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragging(true);
                      }}
                      onDragLeave={(e) => {
                        e.preventDefault();
                        setDragging(false);
                      }}
                      onDrop={(e) => {
                        e.preventDefault();
                        setDragging(false);
                        addFiles(e.dataTransfer.files);
                      }}
                    >
                      <span className="dz-ico">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M12 16V6m0 0l-4 4m4-4l4 4" stroke="var(--aqua-600)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M5 18h14" stroke="var(--aqua-600)" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </span>
                      <span>
                        <span className="dz-t">Drag photos here or click to upload</span>
                        <br />
                        <span className="dz-s">JPG or PNG — up to 5 photos</span>
                      </span>
                    </label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      id="qfile"
                      accept="image/*"
                      multiple
                      style={{ display: "none" }}
                      onChange={(e) => {
                        addFiles(e.target.files);
                        e.target.value = "";
                      }}
                    />
                    <div className="thumbs">
                      {photos.map((p, i) => (
                        <div className="thumb" key={p.url}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={p.url} alt="" />
                          <button type="button" aria-label="Remove" onClick={() => removePhoto(i)}>
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="field full">
                    <label htmlFor="qm">Anything else?</label>
                    <textarea
                      id="qm"
                      name="notes"
                      placeholder="Tell us about the surfaces, size, stains, or timing…"
                    />
                  </div>
                </div>
                <div className="form-foot">
                  <p className="fineprint">
                    By submitting you agree to be contacted about your quote. We never share your info.
                  </p>
                  <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? "Sending…" : "Book now"}
                    {!submitting && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                </div>
                {serverError && <p className="form-error">{serverError}</p>}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
