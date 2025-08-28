import Hero from "../components/Hero/Hero";
import Head from "next/head";
import PortfolioMA from "@/components/Portfolio/portfolio";
import { useEffect, useRef, useState } from "react";
import { aboutMeContent } from "@/app/content/aboutMe";
import AboutMe from "@/components/AboutMe/AboutMe";
import Services from "@/components/Services/Services";
import Contact from "@/components/ContactForm/ContactForm";
import { portfolioContent } from "@/app/content/portfolio";
import { heroContent } from "@/app/content/hero";
import { servicesContent } from "@/app/content/services";
import { contactContent } from "@/app/content/contact";
import GarageFooter from '@/components/Footer/GarageFooter';
import { trackSectionView } from '../lib/gtag';
import GoogleAnalytics from '@/app/GoogleAnalytics';
import { useRouter } from 'next/router';
import { shouldRedirectToQuickLinks } from '../lib/deviceDetection';
import { TransitionProvider } from '../context/TransitionContext';
import ProgressBar from '../components/ProgressBar/ProgressBar';

export default function Home() {
  const router = useRouter();
  
  // Check for mobile redirect
  useEffect(() => {
    const hasSeenFullExperience = localStorage.getItem('hasSeenFullExperience');
    if (!hasSeenFullExperience && shouldRedirectToQuickLinks()) {
      router.push('/quicklinks');
    }
  }, [router]);

  // Show mobile alert for full experience
  useEffect(() => {
    const hasSeenFullExperience = localStorage.getItem('hasSeenFullExperience');
    if (hasSeenFullExperience && typeof window !== 'undefined') {
      // Check if screen width is small tablet or lower (992px is Bootstrap lg breakpoint)
      const isSmallScreen = window.innerWidth < 992;
      if (isSmallScreen) {
        alert('This site is designed to be viewed on desktop, but the experience has been altered to work on this device. We recommend viewing on desktop for the full interactive experience.');
      }
    }
  }, []);

  // Refs
  const portfolioRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // State
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  
  // Debug footer state changes
  useEffect(() => {
    // console.log('🦶 FOOTER STATE CHANGED TO:', isFooterVisible);
  }, [isFooterVisible]);


  // Effects
  useEffect(() => {
    const currentPortfolioRef = portfolioRef.current;
    if (!currentPortfolioRef || observerRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        // Track portfolio visibility for analytics
        if (entry.isIntersecting) {
          trackSectionView('portfolio');
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(currentPortfolioRef);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  return (
    <TransitionProvider>
      <ProgressBar />
      <Head>
        <title>Maalik Ahmad | Creative Developer & Software Engineer</title>
        <meta name="description" content="Maalik Ahmad (Maalik Hornbuckle) is a creative developer and software engineer specializing in modern web applications and user experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Maalik Ahmad | Creative Developer" />
        <meta property="og:description" content="Creative developer and software engineer specializing in modern web applications." />
        <meta property="og:image" content="/maalik-avatar.png" />
        <meta property="og:url" content="https://maalikahmad.tech" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maalik Ahmad | Creative Developer" />
        <meta name="twitter:description" content="Creative developer and software engineer specializing in modern web applications." />
        <meta name="twitter:image" content="/maalik-avatar.png" />
        
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/maalik-avatar.png" 
          as="image" 
          type="image/png"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Maalik Ahmad Hornbuckle",
              "alternateName": ["Maalik Ahmad", "Maalik Hornbuckle"],
              "jobTitle": "Software Engineer",
              "image": "/maalik-avatar.png",
              "url": "https://maalikahmad.tech",
              "sameAs": [
                "https://github.com/maalikh",
                "https://linkedin.com/in/maalikhornbuckle",
                "https://twitter.com/maalikahmad"
              ]
            })
          }}
        />
      </Head>

      <GoogleAnalytics />

      <section className="section container-fluid bg-black">
        <Hero content={heroContent} />
      </section>
      <section className="section container-fluid">
        <Services content={servicesContent} />
      </section>
      <section className="section container-fluid" ref={portfolioRef}>
        <PortfolioMA
          content={portfolioContent}
        />
      </section>
      <section className="section container-fluid">
        <AboutMe content={aboutMeContent} setIsFooterVisible={setIsFooterVisible} />
      </section>

      <section className="section container-fluid">
        <Contact content={contactContent} setIsFooterVisible={setIsFooterVisible} />
      </section>
      <GarageFooter isVisible={isFooterVisible} />
    </TransitionProvider>
  );
}
