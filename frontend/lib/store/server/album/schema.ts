import ApiResponseValidator from "@/lib/types/ApiResponseValidator";
import * as z from "zod";

export const albumDataSchema = z.object({
  name: z.string(),
  artist_name: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  publishedAt: z.string().datetime(),
  cover: z.object({
    data: z.object({
      id: z.number(),
      attributes: z.object({
        name: z.string(),
        alternativeText: z.string().nullish(),
        caption: z.string().nullish(),
        width: z.number(),
        height: z.number(),
        formats: z.object({
          thumbnail: z.object({
            name: z.string(),
            hash: z.string(),
            ext: z.string(),
            mime: z.string(),
            path: z.string().nullish(),
            width: z.number(),
            height: z.number(),
            size: z.number(),
            url: z.string(),
          }),
        }),
        hash: z.string(),
        ext: z.string(),
        mime: z.string(),
        size: z.number(),
        url: z.string(),
        previewUrl: z.string().nullish(),
        provider: z.string(),
        provider_metadata: z.string().nullish(),
        createdAt: z.string().datetime(),
        updatedAt: z.string().datetime(),
      }),
    }),
  }),
});

export const albumApiResSchema = ApiResponseValidator({
  dataSchema: albumDataSchema,
});
