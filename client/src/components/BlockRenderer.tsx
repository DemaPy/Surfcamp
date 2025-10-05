import { BlockProps } from "@/types";
import { HeroSection } from "./blocks/HeroSection";
import { InfoBlock } from "./blocks/InfoBlock";
import { FeaturedArticle } from "./blocks/FeaturedArticle";
import { Subscribe } from "./blocks/Subscribe";

function blockRender(block: BlockProps) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={block.__component + block.id} />;
    case "blocks.info-block":
      return <InfoBlock {...block} key={block.__component + block.id} />;
    case "blocks.article":
      return <FeaturedArticle {...block} key={block.__component + block.id} />;
    case "blocks.subscribe":
      return <Subscribe {...block} key={block.__component + block.id} />;
    default:
      break;
  }
}

export function BlockRenderer({ blocks }: { blocks: BlockProps[] }) {
  return blocks.map((b) => blockRender(b));
}
