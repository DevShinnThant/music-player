import ApiResponseValidator from "@/lib/types/ApiResponseValidator";
import * as z from "zod";

const musicDataSchema = z.object({
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  publishedAt: z.string().datetime(),
  name: z.string(),
  file: z.object({
    data: z.object({
      id: z.number(),
      attributes: z.object({
        alternativeText: z.string().nullish(),
        caption: z.string().nullish(),
        width: z.string().nullish(),
        height: z.string().nullish(),
        formats: z.string().nullish(),
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

export const musicApiResSchema = ApiResponseValidator({
  dataSchema: musicDataSchema,
});
