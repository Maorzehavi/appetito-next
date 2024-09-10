'use server'
import { dishesSchema, imageSchema, validateWithZodSchema } from "./schemas";
import db from "./db";
import { currentUser } from "@clerk/nextjs/server";
import { uploadImage } from "./supabase";
import { redirect } from "next/navigation";

export const createDishAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await currentUser();
  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get('image') as File;

    const validatedFields = validateWithZodSchema(dishesSchema, rawData);
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await db.dish.create({
      data: {
        ...validatedFields,
        image: fullPath,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect('/admin/dishes');
};

export const fetchDishesAction = async (category?: 'PIZZA' | 'PASTA' | 'SALAD' | 'OTHER' ) => {
  if (category) {
    try {
      const dishes = await db.dish.findMany({
        where: {
          category : category as any,
        },
      });
      return { dishes };
    } catch (error) {
      return renderError(error
      );
    }
  }else{
    try {
      const dishes = await db.dish.findMany();
      return  {dishes} ;
    } catch (error) {
      return renderError(error);
    }
  }
};


const renderError = (error: unknown): { message: string } => {
    console.log(error);
    return {
      message: error instanceof Error ? error.message : "An error occurred",
    };
  };
