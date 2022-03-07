import { client } from "../../libs/client";

export default function BlogArticlePage({ content }) {
  return (
    <main>
      <h1>{content.title}</h1>
      <h3>{content.publishedAt}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: `${content.body}`
        }}
      />
    </main>
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