import { ProfileItem } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type AboutSectionProps = {
  profile: ProfileItem;
};

export function AboutSection({ profile }: AboutSectionProps) {
  const initials = profile.name
    .split(/\s|\./)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section id="about" className="px-5 py-20 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={`About ${profile.name}`}
          title="一个持续进化的个人实验室"
          description="个人简介由后台 Profile 管理，头像与 Bio 会实时同步到这里。"
        />

        <Reveal>
          <div className="grid items-center gap-12 rounded-[8px] border border-white/70 bg-white/60 p-7 shadow-[0_24px_90px_rgba(90,122,150,0.1)] backdrop-blur-xl sm:p-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-[-18px] rounded-full bg-gradient-to-br from-sky-200/70 via-white to-blue-100 blur-sm" />
                <div className="relative grid h-56 w-56 place-items-center overflow-hidden rounded-full border border-white/80 bg-gradient-to-br from-sky-100 via-white to-slate-100 shadow-[0_24px_70px_rgba(56,102,132,0.18)] sm:h-72 sm:w-72">
                  {profile.avatar ? (
                    <div
                      aria-label={`${profile.name} avatar`}
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${profile.avatar})` }}
                    />
                  ) : (
                    <span className="text-5xl font-semibold tracking-[0.08em] text-slate-800 sm:text-6xl">
                      {initials || "XK"}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700/75">
                Profile Bio
              </p>
              <h3 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                {profile.name}
              </h3>
              <p className="mt-7 max-w-2xl whitespace-pre-line text-base font-medium leading-8 text-slate-600 sm:text-lg">
                {profile.bio}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
