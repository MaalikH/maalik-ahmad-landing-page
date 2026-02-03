import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "../styles/globals.scss"; // Global styles
import "fullpage.js/dist/fullpage.css";
import { AppProps } from "next/app";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ThemeProvider } from "../context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

export default function App({ Component, pageProps }: AppProps) {
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <ThemeProvider>
      <ReactLenis root options={{
          autoRaf: false,
          smoothWheel: true,
          lerp: 0.08,           // Lower = slower/smoother (default: 0.1)
          wheelMultiplier: 0.7, // Lower = less scroll per wheel tick (default: 1)
          duration: 1.3         // Higher = slower scroll animation (default: 1.2)
        }} ref={lenisRef}>
        <Component {...pageProps} />
        <Analytics />
      </ReactLenis>
    </ThemeProvider>
  );
}
