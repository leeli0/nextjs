import { getPostData } from '../../../lib/posts'
import Head from 'next/head'

export default async function Page({ params }) {
  const data = await getData(params.slug)
  return (
    <artile>
      <h1>{data.title}</h1>
      <div>{data.date}</div>
      <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
    </artile>
  )
}

async function getData(slug) {
  const data = await getPostData(slug)

  return data;
}

async function generateStaticParams() {
  const posts = await getAllPostIds()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
