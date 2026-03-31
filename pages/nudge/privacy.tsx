import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import NudgePrivacy from "@/components/Nudge/NudgePrivacy";

const NudgePrivacyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy — Nudge - Daily Motivation | Maalik Ahmad</title>
        <meta
          name="description"
          content="Privacy policy for Nudge - Daily Motivation. Learn how the app collects, uses, and protects your data."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/nudge/privacy"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Privacy Policy — Nudge - Daily Motivation"
        />
        <meta
          property="og:description"
          content="Learn how Nudge collects, uses, and protects your data. No tracking, no ads, no data sold to third parties."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/nudge/privacy"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <NudgePrivacy />
      </main>
    </>
  );
};

export default NudgePrivacyPage;
