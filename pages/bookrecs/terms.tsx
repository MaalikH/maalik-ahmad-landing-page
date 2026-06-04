import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import BookRecsTerms from "@/components/BookRecs/BookRecsTerms";

const BookRecsTermsPage = () => {
  return (
    <>
      <Head>
        <title>Terms of Use | BookRecs | Maalik Ahmad</title>
        <meta
          name="description"
          content="Terms of Use for BookRecs, including premium subscription terms and recommendation usage terms."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/bookrecs/terms"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Terms of Use | BookRecs" />
        <meta
          property="og:description"
          content="Subscription and usage terms for BookRecs."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/bookrecs/terms"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <BookRecsTerms />
      </main>
    </>
  );
};

export default BookRecsTermsPage;
