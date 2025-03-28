// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "astro",
  nodeVersion: "18",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src/content"], // Your blog posts/pages live here
      models: [
        // Blog Post Model (for insurance guides)
        {
          name: "Post",
          type: "page",
          urlPath: "/blog/{slug}",
          filePath: "src/content/posts/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "date", type: "date", required: true },
            { name: "excerpt", type: "string", description: "Short preview text" },
            { name: "featuredImage", type: "image", required: false }, // Add image support
            { 
              name: "affiliateProducts", 
              type: "list", 
              label: "Affiliate Products",
              items: {
                type: "object",
                fields: [
                  { name: "productName", type: "string", label: "Product Name" },
                  { name: "affiliateLink", type: "string", label: "Affiliate URL" },
                  { name: "price", type: "string", label: "Monthly Price" }
                ]
              }
            },
            { name: "content", type: "markdown" }
          ]
        },
        // Comparison Page Model (e.g., "Best Health Insurance 2024")
        {
          name: "ComparisonPage",
          type: "page",
          urlPath: "/comparisons/{slug}",
          filePath: "src/content/comparisons/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "intro", type: "markdown", label: "Introduction" },
            { 
              name: "plans", 
              type: "list", 
              label: "Insurance Plans",
              items: {
                type: "object",
                fields: [
                  { name: "planName", type: "string" },
                  { name: "coverage", type: "string", options: ["Basic", "Premium", "Full"] },
                  { name: "price", type: "string" },
                  { name: "link", type: "string" }
                ]
              }
            }
          ]
        }
      ]
    })
  ]
});
