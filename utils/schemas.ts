import * as z from 'zod';
import { ZodSchema } from 'zod';

export const dishesSchema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
    description: z.string().min(5, { message: 'Description must be at least 5 characters long' }).optional(),
    category: z.enum(['PIZZA', 'PASTA', 'SALAD', 'OTHER'], { message: 'Invalid category' }),
  });

export function validateWithZodSchema<T>(schema: ZodSchema<T>, data:unknown):T {
    const result = schema.safeParse(data);
    if (!result.success) {
        const errors = result.error.errors.map((error) => error.message);
        throw new Error(errors.join(', '));
    }
    return result.data;
}
export const imageSchema = z.object({
    image: validateFile(),
  });

  function validateFile() {
    const acceptedFileTypes = ['image/'];
    return z
      .instanceof(File)
      .refine((file) => {
        return (
          !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
        );
      }, 'File must be an image');
  }


  export const imageOptionalSchema = z.object({
    image: validateOptionalFile(), // Change to optional
});

function validateOptionalFile() {
    const acceptedFileTypes = ['image/'];
    return z
      .instanceof(File)
      .optional() // Make it optional
      .refine((file) => {
        if (file) {
          return acceptedFileTypes.some((type) => file.type.startsWith(type));
        }
        return true; // Allow if file is not provided
      }, 'File must be an image');
}
