import Footer from "../components/Footer";
import HomeHeader from "../components/homeheader";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <>
      <HomeHeader />
      <div>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>{blog.title}</li>
          ))}
        </ul>
      </div>
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