import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectItem } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type ProjectsSectionProps = {
  projects: ProjectItem[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="bg-white/58 px-5 py-20 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Projects"
          title="研究、工程与设计的作品索引"
          description="先用静态内容建立展示结构，后续每个项目会接入后台详情页和可管理字段。"
        />

        <div className="space-y-5">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className="group grid overflow-hidden rounded-[8px] border border-slate-200/70 bg-white/72 shadow-[0_20px_70px_rgba(90,122,150,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_90px_rgba(90,122,150,0.14)] lg:grid-cols-[0.76fr_1.24fr]">
                <div
                  className={`min-h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden sm:min-h-64`}
                >
                  {project.cover ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${project.cover})` }}
                    />
                  ) : null}
                  <div className="absolute inset-6 rounded-[8px] border border-white/80 bg-white/18 backdrop-blur-sm transition duration-700 group-hover:scale-105 sm:inset-8" />
                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="flex min-h-60 flex-col justify-between p-6 sm:min-h-64 sm:p-9">
                  <div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <h3 className="max-w-xl text-2xl font-semibold tracking-normal text-slate-950 sm:text-3xl">
                        {project.title}
                      </h3>
                      <span className="shrink-0 text-sm text-slate-500">{project.time}</span>
                    </div>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
                    <div className="flex flex-wrap gap-2">
                      {project.technology.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-800 transition hover:text-slate-950"
                    >
                      Details
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.4} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
