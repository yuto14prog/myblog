import { GetStaticProps } from "next";
import { Footer, Header, BlogArticleContent, Layout } from "../../components/index";
import { client } from "../../libs/client";
import { Blog } from "../../types/blog";

type Props = {
  content: Blog
}

export default function BlogArticlePage({ content }: Props) {
  return (
    <Layout>
      <Header />
      <BlogArticleContent content={content} />
      <Footer />
    </Layout>
  );
}

const toStringId = (value: string | string[] | undefined): string => {
  if (!value) {
    throw new Error("Error: ID is undefined");
  }
  if (Array.isArray(value)) {
    return value[0]
  }
  return value
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' })
  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = toStringId(context.params?.id)
  const data = await client.get({ endpoint: 'blog', contentId: id })
  return {
    props: {
      content: data
    }
  }
}