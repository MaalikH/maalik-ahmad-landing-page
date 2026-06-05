import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import RinglyTerms from "@/components/Ringly/RinglyTerms";

const RinglyTermsPage = () => {
  return (
    <>
      <Head>
        <title>Terms of Use | Ringly | Maalik Ahmad</title>
        <meta
          name="description"
          content="Terms of Use for Ringly, the engagement-ring design app. Subscriptions, your content, and account deletion."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/ringly/terms"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Terms of Use | Ringly" />
        <meta
          property="og:description"
          content="The terms for using Ringly. Personal use, AI-generated render disclaimers, subscriptions, and account deletion."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/ringly/terms"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <RinglyTerms />
      </main>
    </>
  );
};

export default RinglyTermsPage;
