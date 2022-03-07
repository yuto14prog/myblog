import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeContentsGrid from "../components/HomeContentsGrid";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <>
      <Header />
      <HomeContentsGrid content={blog} />
      <Footer home words='ver. 1.0.0' />
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