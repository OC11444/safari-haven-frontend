
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import RoomsSection from '@/components/RoomsSection';
import DiningSection from '@/components/DiningSection';
import SpaSection from '@/components/SpaSection';
import SafariSection from '@/components/SafariSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <HeroSection />
        <RoomsSection />
        <DiningSection />
        <SpaSection />
        <SafariSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
