import type { MetadataRoute } from "next";

const disallow = [
  "/dashboard/",
  "/clickup-templates/wp-admin/",
  "/clickup-templates/cart/",
  "/clickup-templates/checkout/",
  "/clickup-templates/my-account/",
];

export default function robots(): MetadataRoute.Robots {
  const url = process.env.NEXT_PUBLIC_FRONTEND_URL;

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/clickup-templates/wp-admin/admin-ajax.php",
        ],
        disallow,
      },
      {
        userAgent: [
          "OAI-SearchBot",
          "ChatGPT-User",
          "GPTBot",
        ],
        allow: [
          "/",
          "/clickup-templates/wp-admin/admin-ajax.php",
        ],
        disallow,
      },
      {
        userAgent: [
          "Claude-SearchBot",
          "Claude-User",
          "ClaudeBot",
        ],
        allow: [
          "/",
          "/clickup-templates/wp-admin/admin-ajax.php",
        ],
        disallow,
      },
      {
        userAgent: [
          "PerplexityBot",
          "Perplexity-User",
        ],
        allow: [
          "/",
          "/clickup-templates/wp-admin/admin-ajax.php",
        ],
        disallow,
      },
      {
        userAgent: "Google-Extended",
        allow: [
          "/",
          "/clickup-templates/wp-admin/admin-ajax.php",
        ],
        disallow,
      },
    ],

    sitemap: [
      `${url}/sitemap.xml`,
      `${url}/clickup-templates/sitemap_index.xml`,
    ],
  };
}