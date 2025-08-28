import { useEffect, useState } from 'react';
import styles from './ProgressBar.module.scss';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(Math.min(scrollPercent, 100));
    };

    // Initial calculation
    updateProgress();

    // Add scroll listener
    window.addEventListener('scroll', updateProgress, { passive: true });

    // Add resize listener to recalculate on viewport changes
    window.addEventListener('resize', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className={styles.progressBarContainer}>
      <div 
        className={styles.progressBar} 
        style={{ width: `${progress}%` }}
        aria-label={`Page progress: ${Math.round(progress)}%`}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
} 