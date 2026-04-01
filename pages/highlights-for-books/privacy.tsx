import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import HighlightsPrivacy from "@/components/HighlightsForBooks/HighlightsPrivacy";

const HighlightsPrivacyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy — Highlights for Books | Maalik Ahmad</title>
        <meta
          name="description"
          content="Privacy policy for Highlights for Books. The app collects no data, makes no network connections, and your highlights never leave your Mac."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/highlights-for-books/privacy"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Privacy Policy — Highlights for Books"
        />
        <meta
          property="og:description"
          content="Highlights for Books collects no data and makes no network connections. Your highlights never leave your Mac."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/highlights-for-books/privacy"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <HighlightsPrivacy />
      </main>
    </>
  );
};

export default HighlightsPrivacyPage;
