import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import NeusTerms from "@/components/Neus/NeusTerms";

const NeusTermsPage = () => {
  return (
    <>
      <Head>
        <title>Terms of Use | Neus | Maalik Ahmad</title>
        <meta
          name="description"
          content="Terms of Use for Neus, including subscription terms and acceptable use of the news reader."
        />
        <link rel="canonical" href="https://www.maalikahmad.tech/neus/terms" />

        {/* Open Graph */}
        <meta property="og:title" content="Terms of Use | Neus" />
        <meta
          property="og:description"
          content="Subscription and usage terms for Neus."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/neus/terms"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <NeusTerms />
      </main>
    </>
  );
};

export default NeusTermsPage;
