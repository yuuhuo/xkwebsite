import Link from "next/link";
import { GalleryItem } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type GallerySectionProps = {
  galleryItems: GalleryItem[];
};

export function GallerySection({ galleryItems }: GallerySectionProps) {
  return (
    <section id="gallery" className="bg-white/58 px-5 py-20 sm:px-6 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Gallery"
          title="视觉作品与摄影片段"
          description="这里预留摄影与视觉作品展示区，支持大图、圆角、悬停放大和后台图片管理。"
        />

        <div className="grid auto-rows-[14rem] gap-4 sm:auto-rows-[17rem] md:grid-cols-4">
          {galleryItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07} className={item.className}>
              <Link
                href={`/gallery/${item.slug}`}
                className="group relative block h-full overflow-hidden rounded-[8px] bg-cover bg-center shadow-[0_20px_80px_rgba(90,122,150,0.1)]"
                style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}
              >
                <div className="absolute inset-0 bg-inherit bg-cover bg-center transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/58 to-transparent p-5 text-white sm:p-6">
                  <h3 className="text-lg font-semibold tracking-normal">{item.title}</h3>
                  <p className="mt-2 text-xs font-medium tracking-normal text-white/80">
                    {item.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
