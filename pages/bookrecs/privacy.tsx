import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import BookRecsPrivacy from "@/components/BookRecs/BookRecsPrivacy";

const BookRecsPrivacyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | BookRecs | Maalik Ahmad</title>
        <meta
          name="description"
          content="Privacy policy for BookRecs. No tracking, no ads. We collect only what the app needs to sync your library and generate your book recommendations."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/bookrecs/privacy"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | BookRecs" />
        <meta
          property="og:description"
          content="BookRecs collects as little as possible. No tracking, no ads, no data sold. Delete your account from inside the app."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/bookrecs/privacy"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <BookRecsPrivacy />
      </main>
    </>
  );
};

export default BookRecsPrivacyPage;
