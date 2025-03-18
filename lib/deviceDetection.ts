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

  // If on mobile and not already on quicklinks, redirect to quicklinks
  if (isMobile && !isQuickLinksPage) return true;

  // If on quicklinks and has seen full experience, don't redirect
  if (isQuickLinksPage && hasSeenFullExperience) return false;

  return false;
}; 