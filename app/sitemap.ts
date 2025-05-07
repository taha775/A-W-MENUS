import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.aandwmenu.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/PrivacyPolicy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Reservation`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Menu`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/About`,
      lastModified: new Date(),
    },
    // Add more routes as needed
  ];
}
