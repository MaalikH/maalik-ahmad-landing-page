import React, { createContext, useContext, useState, useRef, RefObject, useEffect } from 'react';

interface TransitionContextType {
  servicesRef: React.RefObject<HTMLDivElement>;
  featuredWorksRef: React.RefObject<HTMLDivElement>;
  isServicesTransitioning: boolean;
  isFeaturedWorksVisible: boolean;
  startServicesTransition: () => void;
  completeServicesTransition: () => void;
  setFeaturedWorksRef: (ref: React.RefObject<HTMLDivElement>) => void;
  setIsServicesTransitioning: (value: boolean) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
};

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const featuredWorksRef = useRef<HTMLDivElement>(null);
  const [isServicesTransitioning, setIsServicesTransitioning] = useState(false);
  const [isFeaturedWorksVisible, setIsFeaturedWorksVisible] = useState(false);

  const startServicesTransition = () => {
    // console.log('🚀 Starting Services transition');
    // console.log('📍 Services ref:', servicesRef.current);
    // console.log('📍 Featured Works ref:', featuredWorksRef.current);
    setIsServicesTransitioning(true);
    
    // Simulate transition duration
    setTimeout(() => {
      // console.log('✅ Completing Services transition');
      // console.log('📍 Featured Works will now be fully visible');
      setIsServicesTransitioning(false);
      setIsFeaturedWorksVisible(true);
    }, 1000);
  };

  const completeServicesTransition = () => {
    setIsServicesTransitioning(false);
    setIsFeaturedWorksVisible(true);
  };

  const setFeaturedWorksRef = (ref: React.RefObject<HTMLDivElement>) => {
    featuredWorksRef.current = ref.current;
    // console.log('📌 Featured Works ref registered');
    // console.log('📍 Element:', ref.current);
  };

  // Debug transition state
  useEffect(() => {
    // console.log('🔄 Transition state:', { isServicesTransitioning, isFeaturedWorksVisible });
  }, [isServicesTransitioning, isFeaturedWorksVisible]);

  const value: TransitionContextType = {
    servicesRef,
    featuredWorksRef,
    isServicesTransitioning,
    isFeaturedWorksVisible,
    startServicesTransition,
    completeServicesTransition,
    setFeaturedWorksRef,
    setIsServicesTransitioning,
  };

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  );
}; 