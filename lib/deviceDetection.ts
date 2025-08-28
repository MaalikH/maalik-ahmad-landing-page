export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  const mobileKeywords = [
    'android',
    'webos',
    'iphone',
    'ipad',
    'ipod',
    'blackberry',
    'windows phone'
  ];

  return mobileKeywords.some(keyword => userAgent.includes(keyword));
};

export const shouldRedirectToQuickLinks = () => {
  if (typeof window === 'undefined') return false;
  
  const isMobile = isMobileDevice();
  const isQuickLinksPage = window.location.pathname === '/quicklinks';
  const hasSeenFullExperience = localStorage.getItem('hasSeenFullExperience');

  // If user has seen full experience, never redirect
  if (hasSeenFullExperience) return false;

  // If on mobile and not already on quicklinks, redirect to quicklinks
  if (isMobile && !isQuickLinksPage) return true;

  return false;
}; 