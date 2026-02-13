import Head from "next/head";
import Blog from "@/components/Blog";
import Navbar from "@/components/NavBar/Navbar";
import { blogContent } from "@/app/content/blog";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Maalik Ahmad</title>
        <meta
          name="description"
          content="Thoughts on development, design, and building products by Maalik Ahmad"
        />
        <meta property="og:title" content="Blog | Maalik Ahmad" />
        <meta
          property="og:description"
          content="Thoughts on development, design, and building products"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://maalikahmad.tech/homescreen.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://maalikahmad.tech/homescreen.png" />
      </Head>
      <Navbar />
      <main>
        <Blog content={blogContent} />
      </main>
    </>
  );
};

export default BlogPage;
