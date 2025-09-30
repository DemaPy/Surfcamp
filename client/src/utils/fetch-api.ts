interface FetchAPIOptions {
  body?: Record<string, unknown> | FormData | string;
  authToken?: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  next?: NextFetchRequestConfig;
}

interface QueryUrl {
  pathname: string;
  search: string;
}

export async function fetchAPI(
  pathPayload: string | QueryUrl,
  { body, method = "GET", authToken, next }: FetchAPIOptions = {}
) {
  const url = getUrl(pathPayload);
  const headers: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
    method,
    ...(body && !(body instanceof FormData) && typeof body !== "string"
      ? { body: JSON.stringify(body) }
      : { body }),
    ...(next && { next }),
  };

  try {
    const response = await fetch(url, headers);
    const contentType = response.headers.get("content-type");

    if (!response.ok) {
      throw new Error(
        `FetchAPI error: ${response.status} ${response.statusText}`
      );
    }
    if (contentType?.includes("application/json")) {
      const data = await response.json();
      return data;
    }
    // It is valid but not always meaningful because of server
    // can return binary formats. -> application/octet-stream
    return await response.text();
  } catch (error: unknown) {
    console.error("FetchAPI failed:", { url, method, error });
    throw error;
  }
}

function getUrl(pathPayload: string | QueryUrl) {
  const PUBLIC_URL = process.env.NEXT_PUBLIC_BASE_URL;
  if (typeof pathPayload === "object") {
    const url = new URL(pathPayload.pathname, PUBLIC_URL);
    url.search = pathPayload.search;
    return url;
  }
  return new URL(pathPayload, PUBLIC_URL);
}
