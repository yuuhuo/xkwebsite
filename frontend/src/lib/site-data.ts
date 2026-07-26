export type ProjectItem = {
  slug: string;
  category: string;
  title: string;
  time: string;
  description: string;
  technology: string[];
  gradient: string;
  summary: string;
  sections: string[];
  github?: string;
  cover?: string | null;
};

export type BlogItem = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: string[];
};

export type GalleryItem = {
  slug: string;
  title: string;
  description: string;
  className: string;
  detail: string;
  image?: string | null;
};

export type ProfileItem = {
  name: string;
  avatar?: string | null;
  bio: string;
  slogan: string;
  email: string;
  github: string;
  social: string;
};

export const defaultProfile: ProfileItem = {
  name: "X.K",
  avatar: null,
  bio: "用研究者的耐心寻找问题，用工程师的秩序完成系统，用创作者的敏感捕捉世界。",
  slogan: "探索 · 创造 · 连接未来",
  email: "hello@xk-lab.com",
  github: "https://github.com/",
  social: "X.K Creator Lab",
};

export const projects: ProjectItem[] = [
  {
    slug: "personal-research-agent",
    category: "AI Project",
    title: "Personal Research Agent",
    time: "2026",
    description: "面向论文阅读、实验记录和知识沉淀的个人 AI research workflow。",
    technology: ["LLM", "RAG", "Python", "Next.js"],
    gradient: "from-sky-100 via-white to-cyan-100",
    summary:
      "一个帮助研究者管理论文、问题、实验和阶段性结论的个人智能工作流，把零散信息组织成可复用的研究资产。",
    sections: [
      "构建论文阅读、重点摘录和问题追踪的统一入口。",
      "预留 RAG 知识库与实验日志联动能力。",
      "后续可接入本网站后台，展示研究项目进展与论文产出。",
    ],
  },
  {
    slug: "creator-operating-system",
    category: "Software Project",
    title: "Creator Operating System",
    time: "2025",
    description: "为 vibe coding 创作者设计的灵感、任务、文章和项目管理系统。",
    technology: ["React", "Django", "MySQL", "JWT"],
    gradient: "from-slate-100 via-white to-blue-100",
    summary:
      "把创作者的灵感、代码、文章和发布节奏放入一个清晰系统，减少切换成本，让长期创作更稳定。",
    sections: [
      "使用前后端分离架构管理内容和权限。",
      "围绕项目、文章和素材建立统一的数据模型。",
      "后续可扩展为个人 CMS 与创作仪表盘。",
    ],
  },
  {
    slug: "minimal-portfolio-kit",
    category: "Design Project",
    title: "Minimal Portfolio Kit",
    time: "2025",
    description: "将个人品牌、作品展示和长期写作整合为统一视觉语言。",
    technology: ["Figma", "Motion", "Tailwind"],
    gradient: "from-white via-sky-50 to-indigo-100",
    summary:
      "一套面向个人品牌网站的极简设计系统，强调留白、清晰层级、轻动效和可持续内容管理。",
    sections: [
      "建立 Hero、导航、卡片、图库和详情页的视觉规范。",
      "通过 Framer Motion 形成克制的进入动画。",
      "保持页面足够干净，为真实作品和研究内容留出空间。",
    ],
  },
];

export const posts: BlogItem[] = [
  {
    slug: "research-reading-system",
    category: "科研",
    title: "如何建立一个可复用的论文阅读系统",
    excerpt: "从问题、证据、方法和复现实验四个层面整理研究笔记。",
    date: "2026.07",
    readingTime: "6 min read",
    content: [
      "论文阅读不只是把 PDF 看完，而是把问题、证据和可复用的方法沉淀下来。",
      "一个稳定的阅读系统可以分成四层：研究问题、核心证据、方法细节和可复现实验。",
      "后续接入 Markdown CMS 后，这里会展示完整文章正文、代码片段和引用信息。",
    ],
  },
  {
    slug: "frontend-backend-portfolio",
    category: "技术",
    title: "从零搭建个人网站的前后端分离架构",
    excerpt: "用 Next.js 和 Django REST Framework 把作品集做成可持续生长的系统。",
    date: "2026.07",
    readingTime: "8 min read",
    content: [
      "个人网站不应该只是一次性的静态页面，而应该像一个能持续更新的内容系统。",
      "Next.js 负责前台体验，Django REST Framework 负责内容管理、认证和 API。",
      "当数据模型确定后，前端静态数据会逐步替换为真实接口数据。",
    ],
  },
  {
    slug: "quiet-in-fast-change",
    category: "文学",
    title: "在高速变化里保存一点安静",
    excerpt: "关于创作节奏、个人秩序和长期主义的一组随笔。",
    date: "2026.06",
    readingTime: "4 min read",
    content: [
      "变化很快的时候，人容易把所有注意力交给外部节奏。",
      "写作、摄影和研究的共同点，是在不确定里保留一种观察能力。",
      "这个栏目会收纳更个人化的笔记、随笔和阶段性反思。",
    ],
  },
  {
    slug: "training-feedback-progress",
    category: "体育",
    title: "训练、反馈与系统性进步",
    excerpt: "把运动中的反馈循环迁移到学习与工程实践中。",
    date: "2026.06",
    readingTime: "5 min read",
    content: [
      "训练的价值不只在强度，也在反馈是否足够清晰。",
      "学习和工程实践同样需要目标、动作、反馈和复盘。",
      "当反馈循环被建立起来，进步就不再只依赖情绪和灵感。",
    ],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    slug: "soft-horizon",
    title: "Soft Horizon",
    description: "清晨、留白与蓝色边界",
    className: "md:col-span-2 md:row-span-2 bg-[url('/images/hero-xk-lab.jpg')]",
    detail: "一张关于浅色、空间和安静边界的视觉占位。后续可替换为真实摄影作品。",
  },
  {
    slug: "lab-light",
    title: "Lab Light",
    description: "实验室里的冷静光线",
    className: "bg-gradient-to-br from-sky-100 via-white to-slate-100",
    detail: "用清淡蓝白渐变模拟实验室光线，表达研究环境里的秩序感。",
  },
  {
    slug: "blue-note",
    title: "Blue Note",
    description: "像界面一样克制的色彩",
    className: "bg-gradient-to-br from-cyan-100 via-white to-blue-100",
    detail: "保留科技蓝，但降低饱和度，让作品更接近 Apple 式纯净背景。",
  },
  {
    slug: "quiet-system",
    title: "Quiet System",
    description: "秩序感与微弱噪声",
    className: "bg-gradient-to-br from-white via-slate-100 to-sky-200",
    detail: "一个为后续视觉项目准备的静态详情模板。",
  },
];
