import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { getAllBlogPosts, getReadingTime } from "@/lib/content";

export const metadata = {
  title: "Blog",
  description:
    "Insights on data engineering, security, and AI from the Klearpath team.",
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-offwhite bg-grid-pattern">
        <Container>
          <SectionHeading
            title="Blog"
            subtitle="Insights on data engineering, security, and AI from the Klearpath team."
          />
        </Container>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-teal/30 hover:shadow-lg transition-all"
              >
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

                <h2 className="text-2xl font-heading font-bold text-navy mb-3 group-hover:text-teal transition-colors">
                  {post.frontmatter.title}
                </h2>

                <p className="text-slate-mid leading-relaxed mb-6">
                  {post.frontmatter.description}
                </p>

                <div className="flex items-center justify-between text-sm text-slate-light">
                  <span>
                    {formatDate(post.frontmatter.date)} &middot;{" "}
                    {getReadingTime(post.content)}
                  </span>
                  <span className="text-teal font-medium">Read more &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
