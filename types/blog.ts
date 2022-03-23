export type Blog = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  heroImage: {
    url: string
    height: number
    width: number
  }
  title: string
  description: string
  body: string
}