import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
// import Section from "@/components/Section";
// import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      {/* <div className="h-[50px]"></div> */}
      <Container>
        <Benefits />
        {/*
        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>
        */}
        <FAQ />
       
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
