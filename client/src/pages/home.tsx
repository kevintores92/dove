import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Mission from "@/components/mission";
import Cta from "@/components/cta";
import Testimonials from "@/components/testimonials";
import WhyUs from "@/components/why-us";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-blue-100 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Mission />
        <Cta />
        <Testimonials />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}
