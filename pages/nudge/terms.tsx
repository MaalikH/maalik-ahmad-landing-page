import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import NudgeTerms from "@/components/Nudge/NudgeTerms";

const NudgeTermsPage = () => {
  return (
    <>
      <Head>
        <title>Terms of Use | Nudge | Maalik Ahmad</title>
        <meta
          name="description"
          content="Terms of Use for Nudge, including Nudge Pro subscription terms and acceptable use."
        />
        <link rel="canonical" href="https://www.maalikahmad.tech/nudge/terms" />

        {/* Open Graph */}
        <meta property="og:title" content="Terms of Use | Nudge" />
        <meta
          property="og:description"
          content="Subscription and usage terms for Nudge."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/nudge/terms"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <NudgeTerms />
      </main>
    </>
  );
};

export default NudgeTermsPage;
