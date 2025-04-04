
import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeOffer from './components/WhatWeOffer';
import RegisterLogin from './components/RegisterLogin';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import LoanBuddy from './components/LoanBuddy';

const queryClient = new QueryClient();

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Check for user's preferred color scheme on initial load
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
    
    // Add dark class to body if dark mode is enabled
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          
          <main>
            <Hero />
            <WhatWeOffer />
            <RegisterLogin />
            <Testimonials />
            <FAQ />
            <AboutUs />
          </main>
          
          <Footer />
          <LoanBuddy />
          
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
