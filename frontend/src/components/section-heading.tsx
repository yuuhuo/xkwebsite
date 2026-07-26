type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-sky-700/75">
        {eyebrow}
      </p>
      <h2 className="text-[2rem] font-semibold leading-tight tracking-normal text-slate-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-6 text-sm font-medium leading-7 text-slate-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}
