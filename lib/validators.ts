import { z } from "zod";
import { formatPrice } from "./utils";

// Schema for products

const currency = z
  .string()
  .refine((value) => /^\d+(\.\d{2})?$/.test(formatPrice(Number(value))));

export const insertProductSchema = z.object({
  name: z.string().nonempty().min(3, "Name must be at least 3 characters long"),
  slug: z.string().nonempty(),
  category: z.string().nonempty(),
  brand: z.string().nonempty(),
  description: z.string().nonempty(),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "At least one image is required"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});
