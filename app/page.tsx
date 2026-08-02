import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import QuickActions from "@/components/home/QuickActions";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <Hero />
      <Mission />
      <QuickActions />
      <Cards />
    </main>
  );
}