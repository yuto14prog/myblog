import Footer from "../../components/Footer";
import { client } from "../../libs/client";

export default function BlogArticlePage({ content }) {
  return (
    <>
      <main className="bg-background py-14">
        <div className="text-center">
          <h1 className="mb-8 mt-14">{content.title}</h1>
          <h3>{content.publishedAt} に公開</h3>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${content.body}`
          }}
          className='max-w-5xl m-auto bg-white p-12 rounded-3xl mt-14'
        />
      </main>
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