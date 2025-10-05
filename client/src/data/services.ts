interface ApiError {
  status: number;
  name: string;
  message: string;
  details: { key: string; source: string };
}

interface Response {
  data: {
    id: number;
    documentId: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  } | null;
  meta?: Record<string, unknown>;
  error?: ApiError;
}

export async function subscribeService(email: string): Promise<Response> {
  const url = new URL("/api/email-signups", process.env.NEXT_PUBLIC_BASE_URL);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          email: email,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Subscribe Service Error:", error);
    return {
      data: null,
      error: {
        status: 500,
        name: "InternalServerError",
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.",
        details: { key: "internal", source: "server" },
      },
    };
  }
}
