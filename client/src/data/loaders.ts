import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";

const BLOG_PAGE_SIZE = 3;

const HOME_PAGE_QUERY = qs.stringify({
  populate: {
    body: {
      on: {
        "blocks.info-block": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            cta: true,
          },
        },
        "blocks.hero-section": {
          populate: {
            logo: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            image: {
              fields: ["url", "alternativeText"],
            },
            cta: true,
          },
        },
      },
    },
  },
});

export async function getHomePage() {
  return fetchAPI({
    pathname: "/api/home-page",
    search: HOME_PAGE_QUERY,
  });
}

const DYNAMIC_PAGE_QUERY = (slug: string) =>
  qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
      body: {
        on: {
          "blocks.info-block": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              cta: true,
            },
          },
          "blocks.hero-section": {
            populate: {
              logo: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
              image: {
                fields: ["url", "alternativeText"],
              },
              cta: true,
            },
          },
          "blocks.article": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              cta: true,
            },
          },
          "blocks.subscribe": {
            populate: true,
          },
          "blocks.heading": {
            populate: true,
          },
          "blocks.paragraph-with-image": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
          "blocks.paragraph": {
            populate: true,
          },
          "blocks.full-image": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
        },
      },
    },
  });

export async function getDynamicPage(slug: string, pathname?: string) {
  return fetchAPI({
    pathname: pathname || "/api/pages/",
    search: DYNAMIC_PAGE_QUERY(slug),
  });
}

const GLOBAL_LAYOUT_QUERY = qs.stringify({
  populate: {
    header: {
      populate: {
        logo: {
          populate: {
            image: {
              fields: ["url"],
            },
          },
        },
        cta: true,
        navigation: true,
      },
    },
    footer: {
      populate: {
        logo: true,
        policies: true,
        navigation: true,
      },
    },
  },
});

export async function getGlobalLayout() {
  return fetchAPI({
    pathname: "/api/global",
    search: GLOBAL_LAYOUT_QUERY,
  });
}

export async function getContent(
  pathname: string,
  featured: boolean = false,
  query?: string,
  page?: string
) {
  return fetchAPI({
    pathname,
    search: qs.stringify({
      filters: {
        $or: [
          { title: { $containsi: query } },
          { description: { $containsi: query } },
        ],
        ...(featured && { featured: { $eq: featured } }),
      },
      pagination: {
        pageSize: BLOG_PAGE_SIZE,
        page: parseInt(page || "1"),
      },
      sort: ["createdAt:desc"],
      populate: {
        image: {
          fields: ["url", "alternativeText"],
        },
      },
    }),
  });
}
