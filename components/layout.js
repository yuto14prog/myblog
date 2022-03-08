import Head from 'next/head'
import { name } from './HomeHeaderTitle'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="yuto14prog's blog"
        />
        <title>{name}</title>
      </Head>
      <div>{children}</div>
    </>
  )
}