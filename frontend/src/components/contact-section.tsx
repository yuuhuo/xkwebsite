import { Code2, Mail, MessageCircle } from "lucide-react";
import { ProfileItem } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type ContactSectionProps = {
  profile: ProfileItem;
};

function displayUrl(value: string) {
  return value.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function withProtocol(value: string) {
  if (!value) {
    return "#contact";
  }

  return /^https?:\/\//.test(value) ? value : `https://${value}`;
}

export function ContactSection({ profile }: ContactSectionProps) {
  const links = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: "GitHub",
      value: displayUrl(profile.github),
      href: withProtocol(profile.github),
      icon: Code2,
    },
    {
      label: "Social",
      value: displayUrl(profile.social),
      href: /^https?:\/\//.test(profile.social) ? profile.social : "#contact",
      icon: MessageCircle,
    },
  ];

  return (
    <section id="contact" className="px-5 py-20 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="连接新的研究、产品与创作"
          description="后续这里会接入真实邮箱、GitHub、博客平台和社交账号。"
        />

        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="group rounded-[8px] border border-slate-200/80 bg-white/70 p-6 shadow-[0_20px_70px_rgba(90,122,150,0.08)] transition duration-500 hover:-translate-y-1 hover:border-sky-200 hover:bg-sky-50/70 sm:p-7"
                >
                  <Icon className="h-5 w-5 text-sky-800" strokeWidth={1.4} />
                  <p className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {link.label}
                  </p>
                  <p className="mt-3 break-words text-lg font-semibold text-slate-950">
                    {link.value}
                  </p>
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
