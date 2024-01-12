import * as z from "zod";

export default function ApiResponseValidator<DataType extends z.ZodTypeAny>({
  dataSchema,
}: {
  dataSchema: DataType;
}) {
  return z.object({
    data: z.array(
      z.object({
        id: z.number(),
        attributes: dataSchema,
      })
    ),
    meta: z.object({
      pagination: z.object({
        page: z.number(),
        pageCount: z.number(),
        pageSize: z.number(),
        total: z.number(),
      }),
    }),
  });
}
