import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ValueProp from "@/components/ValueProp";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import BusinessStats from "@/components/BusinessStats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <ValueProp />
      <HowItWorks />
      <Services />
      <BusinessStats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
