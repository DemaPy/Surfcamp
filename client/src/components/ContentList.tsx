import { ArticleProps } from "@/types";
import { getContent } from "@/data/loaders";
import { Search } from "./Search";
import { PaginationComponent } from "./Pagination";

interface ContentListProps {
  headline: string;
  query?: string;
  path: string;
  page?: string;
  featured?: boolean;
  showSearch?: boolean;
  showPagination?: boolean;
  component: React.ComponentType<ArticleProps & { basePath: string }>;
  headlineAlignment?: "center" | "right" | "left";
}

async function loader(
  path: string,
  featured?: boolean,
  query?: string,
  page?: string
) {
  const { data, meta } = await getContent(path, featured, query, page);
  return {
    articles: (data as ArticleProps[]) || [],
    pageCount: meta?.pagination?.pageCount || 1,
  };
}

export async function ContentList({
  headline,
  path,
  component,
  featured,
  showSearch,
  showPagination,
  query,
  page,
  headlineAlignment,
}: Readonly<ContentListProps>) {
  const { articles, pageCount } = await loader(path, featured, query, page);
  const Component = component;
  return (
    <section className="content-items container">
      <h3 className={`content-items__headline ${headlineAlignment ?? ""}`}>
        {headline || "Featured Articles"}
      </h3>
      {showSearch && <Search />}
      {!(!articles || articles.length === 0) && (
        <>
          <div className="content-items__container--card">
            {articles.map((article) => (
              <Component
                key={article.documentId}
                {...article}
                basePath={path}
              />
            ))}
          </div>
          {showPagination && <PaginationComponent pageCount={pageCount} />}
        </>
      )}
    </section>
  );
}
