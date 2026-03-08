import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
}

export interface CaseStudyFrontmatter {
  title: string;
  description: string;
  client: string;
  industry: string;
  services: string[];
  results: string[];
}

export interface ServiceFrontmatter {
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface ContentItem<T> {
  slug: string;
  frontmatter: T;
  content: string;
}

function getContentDir(type: string) {
  return path.join(contentDirectory, type);
}

export function getContentBySlug<T>(type: string, slug: string): ContentItem<T> {
  const filePath = path.join(getContentDir(type), `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);
  return { slug, frontmatter: data as T, content };
}

export function getAllContent<T>(type: string): ContentItem<T>[] {
  const dir = getContentDir(type);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    return getContentBySlug<T>(type, slug);
  });
}

export function getAllBlogPosts(): ContentItem<BlogFrontmatter>[] {
  return getAllContent<BlogFrontmatter>("blog").sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getAllCaseStudies(): ContentItem<CaseStudyFrontmatter>[] {
  return getAllContent<CaseStudyFrontmatter>("case-studies");
}

export function getAllServices(): ContentItem<ServiceFrontmatter>[] {
  return getAllContent<ServiceFrontmatter>("services").sort(
    (a, b) => a.frontmatter.order - b.frontmatter.order
  );
}

export function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
