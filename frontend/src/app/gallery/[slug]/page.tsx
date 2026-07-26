import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGalleryItems } from "@/lib/api";

type GalleryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: GalleryPageProps) {
  const { slug } = await params;
  const galleryItems = await getGalleryItems();
  const item = galleryItems.find((entry) => entry.slug === slug);

  if (!item) {
    return {
      title: "Gallery Item Not Found | X.K",
    };
  }

  return {
    title: `${item.title} | X.K Gallery`,
    description: item.description,
  };
}

export default async function GalleryDetailPage({ params }: GalleryPageProps) {
  const { slug } = await params;
  const galleryItems = await getGalleryItems();
  const item = galleryItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7fbfd] px-5 py-10 text-slate-950 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#gallery"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-800 transition hover:text-slate-950"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          Back
        </Link>

        <section className="grid gap-10 pt-16 sm:pt-24 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700/75">
              Gallery
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-950 sm:text-6xl">
              {item.title}
            </h1>
            <p className="mt-7 max-w-xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
              {item.detail}
            </p>
          </div>

          <div
            className={`min-h-[24rem] overflow-hidden rounded-[8px] bg-cover bg-center ${item.className} shadow-[0_28px_100px_rgba(90,122,150,0.12)]`}
            style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}
          >
            <div className="min-h-[24rem] bg-gradient-to-t from-slate-950/20 via-transparent to-white/20" />
          </div>
        </section>
      </div>
    </main>
  );
}
