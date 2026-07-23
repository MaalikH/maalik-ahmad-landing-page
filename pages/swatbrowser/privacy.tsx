import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import SwatBrowserPrivacy from "@/components/SwatBrowser/SwatBrowserPrivacy";

const SwatBrowserPrivacyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | SwatBrowser | Maalik Ahmad</title>
        <meta
          name="description"
          content="Privacy policy for SwatBrowser. No account, no server, no analytics. Your browsing history, bookmarks, and Capture X-Ray records stay on your device."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/swatbrowser/privacy"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | SwatBrowser" />
        <meta
          property="og:description"
          content="SwatBrowser has no account and no backend. Everything it stores stays on your device, and nothing is sent to us."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/swatbrowser/privacy"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <SwatBrowserPrivacy />
      </main>
    </>
  );
};

export default SwatBrowserPrivacyPage;
