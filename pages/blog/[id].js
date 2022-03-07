import BlogArticleContent from "../../components/BlogArticleContent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { client } from "../../libs/client";

export default function BlogArticlePage({ content }) {
  return (
    <>
      <Header />
      <BlogArticleContent content={content} />
      <Footer words='Back to Home' />
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' })
  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blog', contentId: id })
  return {
    props: {
      content: data
    }
  }
}