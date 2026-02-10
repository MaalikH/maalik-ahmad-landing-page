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
      </Head>
      <Navbar />
      <main>
        <Blog content={blogContent} />
      </main>
    </>
  );
};

export default BlogPage;
