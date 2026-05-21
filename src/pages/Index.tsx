import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import Stats from "@/components/Stats";
import WhyChoose from "@/components/WhyChoose";
import TrustBanner from "@/components/TrustBanner";
import Supplier from "@/components/Supplier";
import Testimonials from "@/components/Testimonials";
import OurStory from "@/components/OurStory";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollingText from "@/components/ScrollingText";
import HowItWorks from "@/components/HowItWorks";
import QuoteForm from "@/components/QuoteForm";
import ConectaClube from "@/components/ConectaClube";
import ReciclagemAutomotiva from "@/components/ReciclagemAutomotiva";
import EconomiaCircular from "@/components/EconomiaCircular";
import FloatingConectaClube from "@/components/FloatingConectaClube";
import SectionDivider from "@/components/SectionDivider";
import NeonTopBar from "@/components/NeonTopBar";
import { Helmet } from "react-helmet";
const Index = () => {
  return <>
      <Helmet>
        <title>Conecta Brasil Autopeças - Peças Automotivas para Todo o Brasil</title>
        <meta name="description" content="Distribuidora especializada em peças automotivas. Motores, câmbios, latarias, rodas e peças mecânicas. Envio rápido e seguro para todo o Brasil." />
        <meta name="keywords" content="autopeças, peças automotivas, motores, câmbios, latarias, rodas, peças mecânicas, brasil" />
        <meta property="og:title" content="Conecta Brasil Autopeças - Peças Automotivas para Todo o Brasil" />
        <meta property="og:description" content="Distribuidora especializada em peças automotivas com envio para todo o Brasil" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <NeonTopBar />
      
      <div className="min-h-screen flex flex-col bg-background pt-1">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />
          <ScrollingText />
          
          {/* How It Works */}
          <SectionDivider variant="accent" />
          <HowItWorks className="bg-background" />
          
          {/* Quote Form */}
          <SectionDivider />
          <QuoteForm className="bg-muted/20" />
          
          {/* Conecta Clube */}
          <SectionDivider variant="accent" />
          <ConectaClube className="bg-background" />
          
          {/* Image Carousel - Full width break */}
          <ImageCarousel />
          
          {/* Stats */}
          <SectionDivider />
          
          
          {/* Why Choose */}
          <SectionDivider variant="accent" />
          <WhyChoose className="bg-background" />
          
          {/* Trust Banner */}
          <SectionDivider />
          <TrustBanner className="bg-muted/20" />
          
          {/* Supplier */}
          <SectionDivider variant="accent" />
          <Supplier className="bg-background" />
          
          {/* Reciclagem */}
          <SectionDivider />
          <ReciclagemAutomotiva className="bg-muted/20" />
          
          {/* Economia Circular */}
          <SectionDivider variant="accent" />
          <EconomiaCircular className="bg-background" />
          
          {/* Testimonials */}
          <SectionDivider />
          <Testimonials className="bg-muted/20" />
          
          {/* Our Story */}
          <SectionDivider variant="accent" />
          <OurStory className="bg-background" />
          
          {/* FAQ */}
          <SectionDivider />
          <FAQ className="bg-muted/20" />
        </main>
        <Footer />
        <FloatingConectaClube />
      </div>
    </>;
};
export default Index;