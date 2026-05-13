import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </MainLayout>
  );
}
