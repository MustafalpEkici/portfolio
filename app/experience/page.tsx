import Experience from "@/components/Experience";

export default function ExperiencePage() {
  return (
    // DİKKAT: "bg-black" SİLİNDİ. Sadece üstten boşluk (pt-20) ve tam boy (min-h-screen).
    <main className="pt-20 min-h-screen">
      <Experience />
    </main>
  );
}