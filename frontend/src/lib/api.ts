import {
  BlogItem,
  GalleryItem,
  ProfileItem,
  ProjectItem,
  defaultProfile,
  galleryItems,
  posts,
  projects,
} from "./site-data";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

type ApiProject = {
  id: number;
  title: string;
  cover: string | null;
  description: string;
  technology: string;
  technology_list?: string[];
  github: string;
  date: string | null;
  created_time: string;
};

type ApiProfile = {
  id: number;
  name: string;
  avatar: string | null;
  bio: string;
  slogan: string;
  email: string;
  github: string;
  social: string;
};

type ApiBlog = {
  id: number;
  title: string;
  content: string;
  category: string;
  category_display: string;
  created_time: string;
};

type ApiGallery = {
  id: number;
  image: string;
  description: string;
  date: string | null;
  created_time: string;
};

function slugify(value: string, fallback: string) {
  const slug = value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || fallback;
}

function formatYear(date: string | null, fallback: string) {
  return date ? date.slice(0, 4) : fallback;
}

function formatMonth(date: string | null | undefined) {
  if (!date) {
    return "";
  }

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date.slice(0, 7).replace("-", ".");
  }

  return `${parsed.getFullYear()}.${String(parsed.getMonth() + 1).padStart(2, "0")}`;
}

function splitContent(content: string) {
  return content
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

async function fetchJson<T>(path: string): Promise<T[]> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    next: { revalidate: 30 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}: ${response.status}`);
  }

  return response.json();
}

export async function getProjects(): Promise<ProjectItem[]> {
  try {
    const data = await fetchJson<ApiProject>("/api/projects/");

    if (!data.length) {
      return projects;
    }

    const gradients = [
      "from-sky-100 via-white to-cyan-100",
      "from-slate-100 via-white to-blue-100",
      "from-white via-sky-50 to-indigo-100",
    ];

    return data.map((item, index) => ({
      slug: slugify(item.title, `project-${item.id}`),
      category: "Project",
      title: item.title,
      time: formatYear(item.date, formatYear(item.created_time, "Now")),
      description: item.description,
      technology:
        item.technology_list?.length
          ? item.technology_list
          : item.technology.split(",").map((tech) => tech.trim()).filter(Boolean),
      gradient: gradients[index % gradients.length],
      summary: item.description,
      sections: splitContent(item.description),
      github: item.github,
      cover: item.cover,
    }));
  } catch {
    return projects;
  }
}

export async function getProfile(): Promise<ProfileItem> {
  try {
    const data = await fetchJson<ApiProfile>("/api/profile/");
    const profile = data[0];

    if (!profile) {
      return defaultProfile;
    }

    return {
      name: profile.name || defaultProfile.name,
      avatar: profile.avatar,
      bio: profile.bio || defaultProfile.bio,
      slogan: profile.slogan || defaultProfile.slogan,
      email: profile.email || defaultProfile.email,
      github: profile.github || defaultProfile.github,
      social: profile.social || defaultProfile.social,
    };
  } catch {
    return defaultProfile;
  }
}

export async function getPosts(): Promise<BlogItem[]> {
  try {
    const data = await fetchJson<ApiBlog>("/api/blogs/");

    if (!data.length) {
      return posts;
    }

    return data.map((item) => ({
      slug: slugify(item.title, `blog-${item.id}`),
      category: item.category_display || item.category,
      title: item.title,
      excerpt: splitContent(item.content)[0] ?? item.title,
      date: formatMonth(item.created_time),
      readingTime: "CMS",
      content: splitContent(item.content),
    }));
  } catch {
    return posts;
  }
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    const data = await fetchJson<ApiGallery>("/api/gallery/");

    if (!data.length) {
      return galleryItems;
    }

    return data.map((item, index) => ({
      slug: slugify(item.description, `gallery-${item.id}`),
      title: item.description || `Gallery ${item.id}`,
      description: item.description || "视觉作品",
      className:
        index === 0
          ? "md:col-span-2 md:row-span-2 bg-gradient-to-br from-sky-100 via-white to-slate-100"
          : "bg-gradient-to-br from-cyan-100 via-white to-blue-100",
      detail: item.description || "来自 Django CMS 的图库作品。",
      image: item.image,
    }));
  } catch {
    return galleryItems;
  }
}

export async function getSiteContent() {
  const [profile, projectItems, postItems, gallery] = await Promise.all([
    getProfile(),
    getProjects(),
    getPosts(),
    getGalleryItems(),
  ]);

  return {
    profile,
    projects: projectItems,
    posts: postItems,
    galleryItems: gallery,
  };
}
