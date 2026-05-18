import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import OpenReaderPrivacy from "@/components/OpenReader/OpenReaderPrivacy";

const OpenReaderPrivacyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | OpenReader | Maalik Ahmad</title>
        <meta
          name="description"
          content="Privacy policy for OpenReader. No tracking, no ads. We collect only what the app needs to sync your library and highlights."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/openreader/privacy"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | OpenReader" />
        <meta
          property="og:description"
          content="OpenReader collects as little as possible. No tracking, no ads, no data sold. Delete your account from inside the app."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/openreader/privacy"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <OpenReaderPrivacy />
      </main>
    </>
  );
};

export default OpenReaderPrivacyPage;
