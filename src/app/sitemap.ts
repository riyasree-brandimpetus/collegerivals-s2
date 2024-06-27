import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://collegerivals.com",
      lastModified: new Date(),
    },
    {
      url: "https://collegerivals.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://collegerivals.com/contact-us",
      lastModified: new Date(),
    },
    {
      url: "https://collegerivals.com/news-and-updates",
      lastModified: new Date(),
    },
    {
      url: "https://collegerivals.com/privacy-policy",
      lastModified: new Date(),
    },
    // {
    //   url: "https://collegerivals.com/register",
    //   lastModified: new Date(),
    // },
    {
      url: "https://collegerivals.com/rules",
      lastModified: new Date(),
    },
    {
      url: "https://collegerivals.com/schedule",
      lastModified: new Date(),
    },
    {
      url: "https://collegerivals.com/terms-of-service",
      lastModified: new Date(),
    },
  ];
}
