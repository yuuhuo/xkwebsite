import { AboutSection } from "@/components/about-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { getSiteContent } from "@/lib/api";

export default async function Home() {
  const siteContent = await getSiteContent();

  return (
    <main className="min-h-screen bg-[#f7fbfd] text-slate-950">
      <Navbar />
      <HeroSection profile={siteContent.profile} />
      <AboutSection profile={siteContent.profile} />
      <ProjectsSection projects={siteContent.projects} />
      <BlogSection posts={siteContent.posts} />
      <GallerySection galleryItems={siteContent.galleryItems} />
      <ContactSection profile={siteContent.profile} />
      <SiteFooter />
    </main>
  );
}
