import { ArticleProps } from "@/types";
import { getContent } from "@/data/loaders";
import { Search } from "./Search";

interface ContentListProps {
  headline: string;
  query?: string;
  path: string;
  featured?: boolean;
  showSearch?: boolean;
  component: React.ComponentType<ArticleProps & { basePath: string }>;
  headlineAlignment?: "center" | "right" | "left";
}

async function loader(path: string, featured?: boolean, query?: string) {
  const { data, meta } = await getContent(path, featured, query);
  return {
    articles: (data as ArticleProps[]) || [],
  };
}

export async function ContentList({
  headline,
  path,
  component,
  featured,
  showSearch,
  query,
  headlineAlignment,
}: Readonly<ContentListProps>) {
  const { articles } = await loader(path, featured, query);
  const Component = component;
  return (
    <section className="content-items container">
      <h3 className={`content-items__headline ${headlineAlignment ?? ""}`}>
        {headline || "Featured Articles"}
      </h3>
      {showSearch && <Search />}
      {!(!articles || articles.length === 0) && (
        <div className="content-items__container--card">
          {articles.map((article) => (
            <Component key={article.documentId} {...article} basePath={path} />
          ))}
        </div>
      )}
    </section>
  );
}
