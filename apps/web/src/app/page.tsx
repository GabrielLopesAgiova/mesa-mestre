import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero title="Mesa Mestre" splitTitle={true} subtitle="Gerencie suas Aventuras!"/>
    </div>
  );
}
