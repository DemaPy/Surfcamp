type ComponentType =
  | "blocks.hero-section"
  | "blocks.info-block"
  | "blocks.article"
  | "blocks.subscribe"
  | "blocks.heading"
  | "blocks.paragraph-with-image"
  | "blocks.paragraph"
  | "blocks.full-image";

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

export interface ArticleProps {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  image: ImageProps;
  author: string;
  featured: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
  heading: string;
  theme: "green" | "orange";
  logo?: LogoProps;
  image: ImageProps;
  cta?: LinkProps;
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

export interface FeaturedArticleProps extends Base<"blocks.article"> {
  headline: string;
  content: string;
  cta: LinkProps;
  image: ImageProps;
}

export interface SubscribeProps extends Base<"blocks.subscribe"> {
  headline: string;
  content: string;
  placeholder: string;
  buttonText: string;
}

export interface HeadingProps extends Base<"blocks.heading"> {
  heading: string;
  linkId?: string;
}

export interface ParagraphWithImageProps
  extends Base<"blocks.paragraph-with-image"> {
  content: string;
  image: ImageProps;
  reversed?: boolean;
  imageLandscape?: boolean;
}

export interface ParagraphProps extends Base<"blocks.paragraph"> {
  content: string;
}

export interface FullImageProps extends Base<"blocks.full-image"> {
  id: number;
  __component: "blocks.full-image";
  image: ImageProps;
}

export type BlockProps =
  | HeroSectionProps
  | InfoBlockProps
  | FeaturedArticleProps
  | SubscribeProps
  | HeadingProps
  | ParagraphWithImageProps
  | ParagraphProps
  | FullImageProps;
