import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "../styles/globals.scss"; // Global styles
import "fullpage.js/dist/fullpage.css";
import { AppProps } from "next/app";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
    <ReactLenis root options={{ autoRaf: false, smoothWheel: true}} ref={lenisRef}>
      <Component {...pageProps} />
    </ReactLenis>
  );
}
