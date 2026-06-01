import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
// import HowItWorks from "@/components/HowItWorks"; // hidden for now
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <a id="top" />
      <Hero />
      {/* <HowItWorks /> hidden for now — re-add to restore the "How it works" section */}
      <BeforeAfter />
      <Reviews />
      <QuoteForm />
      <Footer />
    </>
  );
}
