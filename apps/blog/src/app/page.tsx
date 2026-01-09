import { fetchPosts } from '@repo/api/blog';
import Link from 'next/link';

export default async function BlogHomePage() {
  const posts = await fetchPosts(10);

  return (
    <main className="flex flex-col gap-8">
      <h1 className="font-bold text-4xl">Blog</h1>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <article key={post.id} className="flex flex-col gap-2 border-b pb-6">
            <Link href={`/${post.slug}`} className="hover:underline">
              <h2 className="font-semibold text-2xl">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-500">
              {post.category} · {post.readingTime} min read ·{' '}
              {post.publishedAt.toLocaleDateString()}
            </p>
            <p className="text-gray-700">{post.excerpt}</p>
            <Link
              href={`/${post.slug}`}
              className="text-sm text-blue-600 hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
