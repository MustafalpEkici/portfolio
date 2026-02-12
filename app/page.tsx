import Hero from "@/components/Hero";

export default function Home() {
  return (
    // DİKKAT: Burada "bg-black" YOK. Sadece "min-h-screen".
    <main className="min-h-screen">
      <Hero />
    </main>
  );
}