import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from '../.contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer2/hooks'
import Image from 'next/image'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'

function PostCard(post) {
  const Content = getMDXComponent(post.body.code)

  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900" legacyBehavior>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm">
        {/* <Content /> */}
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </div>
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="max-w-xl py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center"></h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
      <Link href="/blog" className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
      More Blogs
      </Link>
    </div>
  )
}