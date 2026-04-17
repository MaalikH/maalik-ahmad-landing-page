import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import HighlightsSupport from "@/components/HighlightsForBooks/HighlightsSupport";

const HighlightsSupportPage = () => {
  return (
    <>
      <Head>
        <title>Support — Highlights for Books | Maalik Ahmad</title>
        <meta
          name="description"
          content="Support and FAQ for the Highlights for Books apps. Setup help, troubleshooting, account deletion, and contact."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/highlights-for-books/support"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Support — Highlights for Books"
        />
        <meta
          property="og:description"
          content="FAQ and contact for Highlights for Books, Importer, and Reader. Any questions, email maalikahmadtech@gmail.com."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/highlights-for-books/support"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <HighlightsSupport />
      </main>
    </>
  );
};

export default HighlightsSupportPage;
