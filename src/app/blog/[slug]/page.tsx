import Link from "next/link";
import { Container } from "@/components/Container";
import { MDXContent } from "@/components/MDXContent";
import {
  getAllBlogPosts,
  getContentBySlug,
  getReadingTime,
  type BlogFrontmatter,
} from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getContentBySlug<BlogFrontmatter>("blog", slug);

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getContentBySlug<BlogFrontmatter>("blog", slug);

  return (
    <>
      {/* Article Header */}
      <section className="py-16 bg-offwhite bg-grid-pattern">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="text-sm text-teal hover:text-teal-dark mb-8 inline-block"
            >
              &larr; Back to Blog
            </Link>

            <div className="flex gap-2 mb-4">
              {post.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-teal bg-teal/10 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-heading font-bold text-navy leading-tight">
              {post.frontmatter.title}
            </h1>

            <div className="flex items-center gap-4 mt-6 text-sm text-slate-mid">
              <span>{post.frontmatter.author}</span>
              <span>&middot;</span>
              <span>{formatDate(post.frontmatter.date)}</span>
              <span>&middot;</span>
              <span>{getReadingTime(post.content)}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <MDXContent source={post.content} />
          </div>
        </Container>
      </section>

      {/* Bottom Nav */}
      <section className="py-12 bg-offwhite border-t border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/blog"
              className="text-teal font-medium hover:text-teal-dark"
            >
              &larr; All Posts
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
