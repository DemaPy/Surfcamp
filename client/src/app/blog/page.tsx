import { BlockRenderer } from "@/components/BlockRenderer";
import { getDynamicPage } from "@/data/loaders";
import { notFound } from "next/navigation";
import { Card, type CardProps } from "@/components/Card";
import { ContentList } from "@/components/ContentList";

async function loader() {
  const data = await getDynamicPage("blog");
  if (data.length === 0) notFound();
  return data;
}

const BlogCard = (props: Readonly<CardProps>) => (
  <Card {...props} basePath="blog" />
);

export default async function DynamicPageRoute({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { data } = await loader();
  return (
    <div>
      <BlockRenderer blocks={data[0].body} />
      <ContentList
        headline="Check out our latest articles"
        path="/api/articles"
        component={BlogCard}
        query={searchParams.query as string | undefined}
        showSearch
        showPagination
        page={searchParams.page as string | undefined}
      />
    </div>
  );
}
