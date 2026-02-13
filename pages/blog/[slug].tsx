import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "@/components/NavBar/Navbar";
import { BlogPost as BlogPostComponent } from "@/components/Blog";
import { BlogPost } from "@/app/content/blog";
import { getPostBySlug, getAllPostSlugs } from "@/lib/markdown";

interface BlogPostPageProps {
  post: BlogPost;
}

const BlogPostPage = ({ post }: BlogPostPageProps) => {
  return (
    <>
      <Head>
        <title>{post.title} | Maalik Ahmad</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} | Maalik Ahmad`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.date} />
        <meta property="og:image" content="https://maalikahmad.tech/homescreen.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://maalikahmad.tech/homescreen.png" />
      </Head>
      <Navbar />
      <main aria-label="Blog post content">
        <BlogPostComponent post={post} />
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllPostSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params,
}) => {
  const slug = params?.slug;
  if (typeof slug !== "string") {
    return { notFound: true };
  }
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default BlogPostPage;
