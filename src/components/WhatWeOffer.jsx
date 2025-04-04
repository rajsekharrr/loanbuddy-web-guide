
import React from 'react';
import { Calculator, LineChart, Lightbulb, BookOpen, Landmark, Award } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 card-hover">
    <div className="w-12 h-12 rounded-md bg-gradient-to-r from-eduBlue-500/20 to-eduTeal-500/20 flex items-center justify-center mb-4">
      <Icon className="text-primary" size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const WhatWeOffer = () => {
  const features = [
    {
      icon: Calculator,
      title: "EMI Calculator",
      description: "Plan your finances with our easy-to-use EMI calculator and understand your repayment schedule."
    },
    {
      icon: LineChart,
      title: "AI Repayment Plan",
      description: "Get personalized repayment strategies based on your financial situation and future income."
    },
    {
      icon: Lightbulb,
      title: "Eligibility Check",
      description: "Quickly check if you qualify for educational loans and discover the best options for your needs."
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Access comprehensive guides about student loans, financial literacy, and educational financing."
    },
    {
      icon: Landmark,
      title: "Institution Partnerships",
      description: "Benefit from our partnerships with educational institutions and preferred interest rates."
    },
    {
      icon: Award,
      title: "Scholarship Guidance",
      description: "Learn about scholarships that can complement your education loan and reduce your overall debt."
    }
  ];

  return (
    <section id="services" className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">What We Offer</h2>
          <p className="text-lg text-muted-foreground mb-6">
            EduMadad provides comprehensive solutions to make educational financing accessible, transparent, and less stressful for students and their families.
          </p>
          <p className="text-muted-foreground mb-8">
            Our AI-powered platform analyzes your profile and needs to provide tailored recommendations and actionable insights, helping you make informed decisions about your educational journey.
          </p>
          <a href="#register" className="btn-primary inline-flex items-center">
            Get Started
          </a>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-eduBlue-500/10 to-eduTeal-500/10 rounded-xl transform -rotate-1"></div>
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
            alt="Students collaborating" 
            className="rounded-lg shadow-lg relative z-10"
          />
        </div>
      </div>
      
      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
