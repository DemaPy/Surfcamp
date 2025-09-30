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
