import Head from "next/head";
import Blog from "@/components/Blog";
import Navbar from "@/components/NavBar/Navbar";
import BlogAuthModal from "@/components/Blog/BlogAuthModal";
import { BlogAuthProvider, useBlogAuth } from "@/context/BlogAuthContext";
import { blogContent } from "@/app/content/blog";
import styles from "@/components/Blog/Blog.module.scss";

const BlogPageContent = () => {
  const { isAuthenticated, isLoading } = useBlogAuth();

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <>
        <main className={styles.blurred} aria-hidden="true">
          <Blog content={blogContent} />
        </main>
        <BlogAuthModal />
      </>
    );
  }

  return (
    <main>
      <Blog content={blogContent} />
    </main>
  );
};

const BlogPage = () => {
  return (
    <BlogAuthProvider>
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
      <BlogPageContent />
    </BlogAuthProvider>
  );
};

export default BlogPage;
