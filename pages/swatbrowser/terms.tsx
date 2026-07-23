import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import SwatBrowserTerms from "@/components/SwatBrowser/SwatBrowserTerms";

const SwatBrowserTermsPage = () => {
  return (
    <>
      <Head>
        <title>Terms of Use | SwatBrowser | Maalik Ahmad</title>
        <meta
          name="description"
          content="Terms of Use for SwatBrowser, including SwatBrowser Pro subscription and lifetime purchase terms."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/swatbrowser/terms"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Terms of Use | SwatBrowser" />
        <meta
          property="og:description"
          content="Subscription, purchase, and protection terms for SwatBrowser."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/swatbrowser/terms"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <SwatBrowserTerms />
      </main>
    </>
  );
};

export default SwatBrowserTermsPage;
