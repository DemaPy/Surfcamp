type ComponentType = "blocks.hero-section" | "blocks.info-block" | "blocks.featured-article" | "blocks.subscribe";

interface Base<
  T extends ComponentType,
  D extends object = Record<string, unknown>
> {
  id: number;
  data?: D;
  __component?: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface LinkProps {
  id: number;
  label: string;
  href: string;
  external: boolean;
}

export interface ImageProps {
  id: number;
  url: string;
  alternativeText: string | null;
}

export interface LogoProps {
  id: number;
  logoText: string;
  image: ImageProps;
}

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
  heading: string;
  theme: "green" | "orange";
  logo: LogoProps;
  image: ImageProps;
  cta: LinkProps;
  author?: string;
  darken?: boolean;
}

export interface InfoBlockProps extends Base<"blocks.info-block"> {
  title: string;
  description: string;
  image: ImageProps;
  cta: LinkProps;
  theme: "green" | "orange";
  reversed: boolean;
}

export interface FeaturedArticleProps extends Base<"blocks.featured-article"> {
  headline: string;
  excerpt: string;
  link: LinkProps;
  image: ImageProps;
}

export interface SubscribeProps extends Base<"blocks.subscribe"> {
  headline: string;
  content: string;
  placeholder: string;
  buttonText: string;
}

export type BlockProps = HeroSectionProps | InfoBlockProps;
