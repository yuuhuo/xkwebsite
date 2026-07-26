import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjects } from "@/lib/api";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | X.K",
    };
  }

  return {
    title: `${project.title} | X.K Projects`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7fbfd] px-5 py-10 text-slate-950 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-800 transition hover:text-slate-950"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          Back
        </Link>

        <section className="pt-16 sm:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700/75">
            {project.category} · {project.time}
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-7 max-w-3xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
            {project.summary}
          </p>

          <div
            className={`mt-14 min-h-[22rem] overflow-hidden rounded-[8px] bg-gradient-to-br ${project.gradient} shadow-[0_28px_100px_rgba(90,122,150,0.12)]`}
          >
            <div className="h-full min-h-[22rem] border border-white/70 bg-white/20 backdrop-blur-sm" />
          </div>
        </section>

        <section className="grid gap-10 py-20 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Project Notes</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technology.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {project.sections.map((section) => (
              <p key={section} className="text-base leading-8 text-slate-600">
                {section}
              </p>
            ))}
            <a
              href={project.github || "https://github.com/"}
              className="inline-flex items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-[0.16em] text-sky-800 transition hover:text-slate-950"
            >
              GitHub Placeholder
              <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
