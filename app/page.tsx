import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import QuickActions from "@/components/home/QuickActions";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Mission />
      <QuickActions />
      <Cards />
      <Footer />
    </main>
  );
}