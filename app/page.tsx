import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
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
      <HowItWorks />
      <BeforeAfter />
      <Reviews />
      <QuoteForm />
      <Footer />
    </>
  );
}
