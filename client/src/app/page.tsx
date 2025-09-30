import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import "../sass/main.scss";
import { BlockRenderer } from "@/components/BlockRenderer";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  return data;
}

export default async function Home() {
  const { data } = await loader();
  return (
    <div>
      <BlockRenderer blocks={data.body} />
    </div>
  );
}
