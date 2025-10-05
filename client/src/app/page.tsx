import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import "../sass/main.scss";
import { BlockRenderer } from "@/components/BlockRenderer";
import { Card, CardProps } from "@/components/Card";
import { ContentList } from "@/components/ContentList";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  return data;
}

const HomeCard = (props: Readonly<CardProps>) => (
  <Card {...props} basePath="blog" />
);

export default async function Home() {
  const { data } = await loader();
  return (
    <div>
      <BlockRenderer blocks={data.body} />
      <ContentList
        headline="Check out our latest articles"
        path="/api/articles"
        component={HomeCard}
        featured
      />
    </div>
  );
}
