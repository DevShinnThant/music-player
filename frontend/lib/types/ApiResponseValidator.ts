import * as z from "zod";

export function ApiResponseValidator<DataType extends z.ZodTypeAny>({
  dataSchema,
}: {
  dataSchema: DataType;
}) {
  return z.object({
    data: dataSchema,
    meta: z.object({
      pagination: z
        .object({
          page: z.number(),
          pageCount: z.number(),
          pageSize: z.number(),
          total: z.number(),
        })
        .nullish(),
    }),
  });
}

export function ApiReponseTypeArray<DataType extends z.ZodTypeAny>({
  schema,
}: {
  schema: DataType;
}) {
  return z.array(
    z.object({
      id: z.number(),
      attributes: schema,
    })
  );
}

export function ApiReponseTypeObject<DataType extends z.ZodTypeAny>({
  schema,
}: {
  schema: DataType;
}) {
  return z.object({
    id: z.number(),
    attributes: schema,
  });
}
