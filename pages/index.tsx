import { Footer, Header, HomeContentsGrid, Layout } from "../components/index";
import { client } from "../libs/client";
import { Blog } from "../types/blog";

type Props = {
  blog: Blog[]
}

export default function Home({ blog }: Props) {
  return (
    <Layout>
      <Header home />
      <HomeContentsGrid content={blog} />
      <Footer home />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents
    }
  }
}