import type { FeaturedArticleProps } from "@/types";
import Link from "next/link";
import { StrapiImage } from "@/components/StrapiImage";
import ReactMarkdown from "react-markdown";

export function FeaturedArticle({
  headline,
  cta,
  content,
  image,
}: Readonly<FeaturedArticleProps>) {
  return (
    <article className="featured-article container">
      <div className="featured-article__info">
        <h3>{headline}</h3>
        <ReactMarkdown>{content}</ReactMarkdown>
        <Link href={cta.href} className="btn btn--green btn--medium">
          {cta.label}
        </Link>
      </div>
      <StrapiImage
        src={image.url}
        alt={image.alternativeText || "No alternative text provided"}
        height={200}
        width={300}
      />
    </article>
  );
}
