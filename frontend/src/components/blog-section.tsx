import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BlogItem } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type BlogSectionProps = {
  posts: BlogItem[];
};

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="px-5 py-20 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Writing"
          title="把思考写成可以回看的路径"
          description="博客将支持 Markdown，分类覆盖科研、技术、文学和体育，形成个人知识库的公开窗口。"
        />

        <div className="grid gap-px overflow-hidden rounded-[8px] border border-slate-200/70 bg-slate-200/70 md:grid-cols-2">
          {posts.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.06}>
              <article className="group flex min-h-64 flex-col justify-between bg-white/76 p-6 transition duration-500 hover:bg-sky-50/70 sm:min-h-72 sm:p-9">
                <div>
                  <div className="mb-8 flex items-center justify-between gap-5 text-xs text-slate-500">
                    <span className="font-semibold tracking-[0.16em]">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold leading-snug tracking-normal text-slate-950 sm:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-800 transition group-hover:text-slate-950"
                >
                  Read
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.4} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
