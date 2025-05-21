'use client';

import About from '@/components/organisms/About';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import Intro from '@/components/organisms/Intro';
import Navbar from '@/components/organisms/Navbar';
import ServicesGrid from '@/components/organisms/Services';
import OnlineShopSection from '@/components/organisms/Shop';
import TestimonialsCarousel from '@/components/organisms/Testimonials';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesGrid />
      <Intro />
      <OnlineShopSection />
      <About />
      <TestimonialsCarousel />
      <Footer />
    </main>
  );
}
