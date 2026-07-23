import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import SwatBrowserSupport from "@/components/SwatBrowser/SwatBrowserSupport";

const SwatBrowserSupportPage = () => {
  return (
    <>
      <Head>
        <title>Support | SwatBrowser | Maalik Ahmad</title>
        <meta
          name="description"
          content="Support and FAQ for SwatBrowser. Pop-up blocking, Capture X-Ray, Private Mode, the Safari blocker, subscriptions, and refunds."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/swatbrowser/support"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Support | SwatBrowser" />
        <meta
          property="og:description"
          content="FAQ and contact for SwatBrowser."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/swatbrowser/support"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <SwatBrowserSupport />
      </main>
    </>
  );
};

export default SwatBrowserSupportPage;
