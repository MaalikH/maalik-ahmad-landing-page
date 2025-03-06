interface Window {
    fullpage_api: {
      setAllowScrolling: (allow: boolean) => void;
      moveSectionDown: () => void;
      isScrollAllowed: boolean;
      moveSectionUp: () => void;
      moveTo: (sectionId) => void;
      // Add any other methods you may need from the Fullpage.js API
    };
  }
  