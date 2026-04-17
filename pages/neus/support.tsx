import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import NeusSupport from "@/components/Neus/NeusSupport";

const NeusSupportPage = () => {
  return (
    <>
      <Head>
        <title>Support &mdash; Neus | Maalik Ahmad</title>
        <meta
          name="description"
          content="Support and FAQ for Neus. How the app stays neutral, how to follow stories, how to delete your account, and how to reach us."
        />
        <link rel="canonical" href="https://www.maalikahmad.tech/neus/support" />

        {/* Open Graph */}
        <meta property="og:title" content="Support &mdash; Neus" />
        <meta
          property="og:description"
          content="FAQ and contact for Neus. Any questions, email maalikahmadtech@gmail.com."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/neus/support"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <NeusSupport />
      </main>
    </>
  );
};

export default NeusSupportPage;
