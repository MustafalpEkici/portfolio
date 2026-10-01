import Hero from "@/components/Hero";
import Education from "@/components/Education";

export default function Home() {
  return (
    // DİKKAT: Burada "bg-black" YOK. Sadece "min-h-screen".
    <main className="min-h-screen">
      <Hero />
      <Education />
    </main>
  );
}
