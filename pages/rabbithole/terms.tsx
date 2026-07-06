import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import RabbitHoleTerms from "@/components/RabbitHole/RabbitHoleTerms";

const RabbitHoleTermsPage = () => {
  return (
    <>
      <Head>
        <title>Terms of Use | Rabbit Hole | Maalik Ahmad</title>
        <meta
          name="description"
          content="Terms of Use for Rabbit Hole: Deep Dives, including premium deck subscription terms."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/rabbithole/terms"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Terms of Use | Rabbit Hole" />
        <meta
          property="og:description"
          content="Subscription and use terms for Rabbit Hole."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/rabbithole/terms"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <RabbitHoleTerms />
      </main>
    </>
  );
};

export default RabbitHoleTermsPage;
