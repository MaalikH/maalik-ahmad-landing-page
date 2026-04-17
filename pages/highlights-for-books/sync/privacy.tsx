import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import HighlightsSyncPrivacy from "@/components/HighlightsForBooks/HighlightsSyncPrivacy";

const HighlightsSyncPrivacyPage = () => {
  return (
    <>
      <Head>
        <title>
          Privacy Policy — Highlights for Books Cloud Sync | Maalik Ahmad
        </title>
        <meta
          name="description"
          content="Privacy policy for Highlights for Books Importer (macOS) and Reader (iOS). Covers Firebase Authentication, Firestore storage, Sign in with Apple/Google, and in-app account deletion."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/highlights-for-books/sync/privacy"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Privacy Policy — Highlights for Books Cloud Sync"
        />
        <meta
          property="og:description"
          content="How Highlights for Books Importer and Reader handle your data. Firebase Auth + Firestore, no analytics, in-app account deletion."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/highlights-for-books/sync/privacy"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <HighlightsSyncPrivacy />
      </main>
    </>
  );
};

export default HighlightsSyncPrivacyPage;
