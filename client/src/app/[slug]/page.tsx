import { BlockRenderer } from "@/components/BlockRenderer";
import { getDynamicPage } from "@/data/loaders";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function loader(slug: string) {
  const data = await getDynamicPage(slug);
  if (data.length === 0) notFound();
  return data;
}

export default async function DynamicPageRoute({ params }: PageProps) {
  const slug = (await params).slug;
  const { data } = await loader(slug);

  return (
    <div>
      <BlockRenderer blocks={data[0].body} />
    </div>
  );
}
