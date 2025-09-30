import { BlockProps } from "@/types";
import { HeroSection } from "./blocks/HeroSection";
import { InfoBlock } from "./blocks/InfoBlock";

function blockRender(block: BlockProps) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={block.id} />;
    case "blocks.info-block":
      return <InfoBlock {...block} key={block.id} />;
    default:
      break;
  }
}

export function BlockRenderer({ blocks }: { blocks: BlockProps[] }) {
  return blocks.map((b) => blockRender(b));
}
