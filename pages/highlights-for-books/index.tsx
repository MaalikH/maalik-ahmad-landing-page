import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import HighlightsLanding from "@/components/HighlightsForBooks/HighlightsLanding";

const HighlightsForBooksPage = () => {
  return (
    <>
      <Head>
        <title>Highlights for Books | Maalik Ahmad</title>
        <meta
          name="description"
          content="Highlights for Books reads your Apple Books highlights and notes into one beautiful, searchable interface. Available on the Mac App Store for $4.99."
        />
        <link
          rel="canonical"
          href="https://www.maalikahmad.tech/highlights-for-books"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Highlights for Books | Maalik Ahmad"
        />
        <meta
          property="og:description"
          content="Your Apple Books highlights and notes in one beautiful, searchable interface. Privacy-first macOS app — no tracking, no network connections."
        />
        <meta
          property="og:url"
          content="https://www.maalikahmad.tech/highlights-for-books"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.maalikahmad.tech/homescreen.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Maalik Ahmad Tech" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Highlights for Books | Maalik Ahmad"
        />
        <meta
          name="twitter:description"
          content="Your Apple Books highlights and notes in one beautiful, searchable interface. Privacy-first macOS app."
        />
        <meta
          name="twitter:image"
          content="https://www.maalikahmad.tech/homescreen.png"
        />

        {/* Structured Data - SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Highlights for Books",
              operatingSystem: "macOS 14.0+",
              applicationCategory: "UtilitiesApplication",
              offers: {
                "@type": "Offer",
                price: "4.99",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              description:
                "Reads your Apple Books highlights and notes into one beautiful, searchable interface.",
              author: {
                "@type": "Person",
                name: "Maalik Ahmad",
                url: "https://www.maalikahmad.tech",
              },
            }),
          }}
        />
      </Head>
      <Navbar />
      <main>
        <HighlightsLanding />
      </main>
    </>
  );
};

export default HighlightsForBooksPage;
