import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import RabbitHolePrivacy from "@/components/RabbitHole/RabbitHolePrivacy";

const RabbitHolePrivacyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Rabbit Hole | Maalik Ahmad</title>
        <meta
          name="description"
          content="Privacy policy for Rabbit Hole: Deep Dives. No ads, no data sold. We collect only what the app needs to sync your reading progress and deliver premium decks."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/rabbithole/privacy"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | Rabbit Hole" />
        <meta
          property="og:description"
          content="Rabbit Hole collects as little as possible. No ads, no data sold. Delete your account from inside the app."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/rabbithole/privacy"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <RabbitHolePrivacy />
      </main>
    </>
  );
};

export default RabbitHolePrivacyPage;
