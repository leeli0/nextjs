import { getPostData } from '../../../lib/posts'
import Head from 'next/head'

export default async function Page({ params }) {
  const data = await getData(params.slug)
  return (
    <article>
      <h1>{data.title}</h1>
      <div><b>Release:</b> {data.release} <b>Update:</b> {data.update} <b>Author:</b> {data.author}</div>
      <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
    </article>
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
