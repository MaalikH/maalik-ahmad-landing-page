import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import RabbitHoleSupport from "@/components/RabbitHole/RabbitHoleSupport";

const RabbitHoleSupportPage = () => {
  return (
    <>
      <Head>
        <title>Support | Rabbit Hole | Maalik Ahmad</title>
        <meta
          name="description"
          content="Support and FAQ for Rabbit Hole: Deep Dives. Deep dives, premium decks, subscriptions, and how to delete your account."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/rabbithole/support"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Support | Rabbit Hole" />
        <meta
          property="og:description"
          content="FAQ and contact for Rabbit Hole."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/rabbithole/support"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <RabbitHoleSupport />
      </main>
    </>
  );
};

export default RabbitHoleSupportPage;
