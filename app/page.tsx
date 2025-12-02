import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/sections/hero';
import WhyChooseUs from '@/components/sections/why-choose-us';
import Events from '@/components/sections/events';
import News from '@/components/sections/news';
import Partners from '@/components/sections/partners';
import Testimonials from '@/components/sections/testimonials';
import CtaSection from '@/components/sections/cta-section';
import Formations from '@/components/sections/formations';
import Gallery from '@/components/sections/gallery';
import AnimatedSection from '@/components/animated-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <AnimatedSection>
          <WhyChooseUs />
        </AnimatedSection>
        <AnimatedSection>
          <Formations />
        </AnimatedSection>
        <AnimatedSection>
          <Events />
        </AnimatedSection>
        <AnimatedSection>
          <Gallery />
        </AnimatedSection>
        <AnimatedSection>
          <News />
        </AnimatedSection>
        <AnimatedSection>
          <Partners />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <CtaSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
