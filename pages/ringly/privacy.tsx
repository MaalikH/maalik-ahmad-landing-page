import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import RinglyPrivacy from "@/components/Ringly/RinglyPrivacy";

const RinglyPrivacyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Ringly | Maalik Ahmad</title>
        <meta
          name="description"
          content="Privacy policy for Ringly. No tracking, no ads. We collect only what the app needs to save your ring designs and generate your renders."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/ringly/privacy"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | Ringly" />
        <meta
          property="og:description"
          content="Ringly collects as little as possible. No tracking, no ads, no data sold. Delete your account from inside the app."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/ringly/privacy"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <RinglyPrivacy />
      </main>
    </>
  );
};

export default RinglyPrivacyPage;
