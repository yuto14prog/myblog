import { Footer, Header, HomeContentsGrid, Layout } from "../components/index";
import { client } from "../libs/client";

export default function Home({ blog }) {
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