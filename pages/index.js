import { Footer, Header, HomeContentsGrid } from "../components/index";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <>
      <Header home />
      <HomeContentsGrid content={blog} />
      <Footer home />
    </>
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