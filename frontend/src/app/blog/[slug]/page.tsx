import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPosts } from "@/lib/api";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | X.K",
    };
  }

  return {
    title: `${post.title} | X.K Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7fbfd] px-5 py-10 text-slate-950 sm:px-8 sm:py-14">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-800 transition hover:text-slate-950"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          Back
        </Link>

        <header className="pt-16 sm:pt-24">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700/75">
            {post.category} · {post.date} · {post.readingTime}
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-950 sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-7 text-base font-medium leading-8 text-slate-600 sm:text-lg">
            {post.excerpt}
          </p>
        </header>

        <div className="mt-16 space-y-7 border-t border-slate-200/80 pt-12">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-9 text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
