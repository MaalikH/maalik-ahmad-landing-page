import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import OpenReaderTerms from "@/components/OpenReader/OpenReaderTerms";

const OpenReaderTermsPage = () => {
  return (
    <>
      <Head>
        <title>Terms of Use | OpenReader | Maalik Ahmad</title>
        <meta
          name="description"
          content="Terms of Use for OpenReader, including OpenReader Cloud subscription terms and AI audiobook purchase terms."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/openreader/terms"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Terms of Use | OpenReader" />
        <meta
          property="og:description"
          content="Subscription and purchase terms for OpenReader."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/openreader/terms"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <OpenReaderTerms />
      </main>
    </>
  );
};

export default OpenReaderTermsPage;
