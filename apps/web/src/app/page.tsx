import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Resources from "@/components/landing/resources";

export default function Home() {
  return (
    <>
      <Header />
      <Hero title="Mesa Mestre" splitTitle={true} subtitle="Organize campanhas, jogadores e sessões em um só lugar."/>
      <Resources />
    </>
  );
}
