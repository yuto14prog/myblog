import Head from 'next/head'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { name } from './HomeHeaderTitle'

type LayoutProps = {
  children: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

export default function Layout({ children }: LayoutProps) {
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