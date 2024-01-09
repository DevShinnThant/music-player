import Strapi from "strapi-sdk-js";

export const strapi = new Strapi({
  url: process.env.NEXT_PUBLIC_DATABASE_URL || "http://localhost:1337",
  store: {
    key: "strapi_jwt",
    useLocalStorage: false,
    cookieOptions: { path: "/" },
  },
});
