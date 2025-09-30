import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";

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

export async function getDynamicPage(slug: string) {
  return fetchAPI({
    pathname: "/api/pages/",
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
  },
});

export async function getGlobalLayout() {
  return fetchAPI({
    pathname: "/api/global",
    search: GLOBAL_LAYOUT_QUERY,
  });
}
