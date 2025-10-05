import { BlockRenderer } from "@/components/BlockRenderer";
import { getDynamicPage } from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getDynamicPage("blog");
  if (data.length === 0) notFound();
  return data;
}

export default async function DynamicPageRoute() {
  const { data } = await loader();
  return (
    <div>
      <BlockRenderer blocks={data[0].body} />
    </div>
  );
}
