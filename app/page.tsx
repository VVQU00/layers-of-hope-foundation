import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Mission />
      <Cards />
      <Footer />
    </main>
  );
}