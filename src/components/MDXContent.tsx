import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="text-2xl font-bold text-navy mt-12 mb-4 font-heading" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="text-xl font-semibold text-navy mt-8 mb-3 font-heading" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="text-slate-dark leading-relaxed mb-6" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="list-disc list-inside space-y-2 mb-6 text-slate-dark" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-dark" {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote className="border-l-4 border-teal pl-6 my-8 italic text-slate-mid" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="text-teal-dark underline underline-offset-2 hover:text-teal" {...props} />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="text-navy font-semibold" {...props} />
  ),
};

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
