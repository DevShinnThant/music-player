import Strapi from "strapi-sdk-js";

export const strapi = new Strapi({
  store: {
    key: "strapi_jwt",
    useLocalStorage: false,
    cookieOptions: { path: "/" },
  },
});
