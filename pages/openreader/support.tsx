import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import OpenReaderSupport from "@/components/OpenReader/OpenReaderSupport";

const OpenReaderSupportPage = () => {
  return (
    <>
      <Head>
        <title>Support | OpenReader | Maalik Ahmad</title>
        <meta
          name="description"
          content="Support and FAQ for OpenReader. Importing books, highlights, AI audiobooks, OpenReader Cloud, and how to delete your account."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/openreader/support"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Support | OpenReader" />
        <meta
          property="og:description"
          content="FAQ and contact for OpenReader."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/openreader/support"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <OpenReaderSupport />
      </main>
    </>
  );
};

export default OpenReaderSupportPage;
