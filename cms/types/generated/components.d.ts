import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksArticle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_articles';
  info: {
    displayName: 'Article';
  };
  attributes: {
    content: Schema.Attribute.String & Schema.Attribute.Required;
    cta: Schema.Attribute.Component<'element.link', false>;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksFullImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_full_images';
  info: {
    displayName: 'Full image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    linkId: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'element.link', false> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    logo: Schema.Attribute.Component<'element.logo', false> &
      Schema.Attribute.Required;
    theme: Schema.Attribute.Enumeration<['orange', 'green']> &
      Schema.Attribute.DefaultTo<'orange'>;
  };
}

export interface BlocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_blocks';
  info: {
    displayName: 'Info block';
  };
  attributes: {
    cta: Schema.Attribute.Component<'element.link', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    theme: Schema.Attribute.Enumeration<['orange', 'green']> &
      Schema.Attribute.DefaultTo<'orange'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface BlocksParagraphWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraph_with_images';
  info: {
    displayName: 'Paragraph With Image';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    imageLandscape: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface BlocksSubscribe extends Struct.ComponentSchema {
  collectionName: 'components_blocks_subscribes';
  info: {
    displayName: 'Subscribe';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementLink extends Struct.ComponentSchema {
  collectionName: 'components_element_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ElementLogo extends Struct.ComponentSchema {
  collectionName: 'components_element_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    logoText: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copy: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    navigation: Schema.Attribute.Component<'element.link', true>;
    policies: Schema.Attribute.Component<'element.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'element.link', false>;
    logo: Schema.Attribute.Component<'element.logo', false>;
    navigation: Schema.Attribute.Component<'element.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.article': BlocksArticle;
      'blocks.full-image': BlocksFullImage;
      'blocks.heading': BlocksHeading;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.info-block': BlocksInfoBlock;
      'blocks.paragraph': BlocksParagraph;
      'blocks.paragraph-with-image': BlocksParagraphWithImage;
      'blocks.subscribe': BlocksSubscribe;
      'element.link': ElementLink;
      'element.logo': ElementLogo;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
