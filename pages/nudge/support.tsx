import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import NudgeSupport from "@/components/Nudge/NudgeSupport";

const NudgeSupportPage = () => {
  return (
    <>
      <Head>
        <title>Support — Nudge - Daily Motivation | Maalik Ahmad</title>
        <meta
          name="description"
          content="Get help with Nudge - Daily Motivation. Find answers to common questions about accounts, notifications, subscriptions, and data deletion."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/nudge/support"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Support — Nudge - Daily Motivation"
        />
        <meta
          property="og:description"
          content="Get help with Nudge. FAQ covering accounts, notifications, subscriptions, and data deletion."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/nudge/support"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <NudgeSupport />
      </main>
    </>
  );
};

export default NudgeSupportPage;
