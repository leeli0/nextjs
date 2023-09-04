import { getAllPostIds } from '../lib/posts'
import Link from 'next/link'

export default async function Page() {
  const data = await getAllPostIds()
  return (
    <section>
      <ul>
        {data.map(({id, update, title}) => (
          <li key={id}>
          <Link href={`/blog/${id}`}>{title}</Link>
          <br />
          <small><b>Update:</b> {update}</small>
          </li>
        ))}
      </ul>
    </section>
  )
}
