import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import NeusPrivacy from "@/components/Neus/NeusPrivacy";

const NeusPrivacyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy &mdash; Neus | Maalik Ahmad</title>
        <meta
          name="description"
          content="Privacy policy for Neus. No tracking, no ads. We collect only what the app needs to sync your saves and follows across devices."
        />
        <link rel="canonical" href="https://www.maalikahmad.tech/neus/privacy" />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy &mdash; Neus" />
        <meta
          property="og:description"
          content="Neus collects as little as possible. No tracking, no ads, no data sold. Delete your account from inside the app."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/neus/privacy"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <NeusPrivacy />
      </main>
    </>
  );
};

export default NeusPrivacyPage;
