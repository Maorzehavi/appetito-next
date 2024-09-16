"use server";
import {
  dishesSchema,
  imageOptionalSchema,
  imageSchema,
  validateWithZodSchema,
} from "./schemas";
import db from "./db";
import { currentUser } from "@clerk/nextjs/server";
import { uploadImage } from "./supabase";
import { redirect } from "next/navigation";
import exp from "constants";
import { revalidatePath } from "next/cache";

export const createDishAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await currentUser();
  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;

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
  redirect("/admin/dishes");
};

export const fetchDishesAction = async (
  category?: "PIZZA" | "PASTA" | "SALAD" | "OTHER"
) => {
  if (category) {
    try {
      const dishes = await db.dish.findMany({
        where: {
          category: category as any,
        },
      });
      return { dishes };
    } catch (error) {
      return renderError(error);
    }
  } else {
    try {
      const dishes = await db.dish.findMany();
      return { dishes };
    } catch (error) {
      return renderError(error);
    }
  }
};

export const fetchDishAction = async (dishId: string) => {
  const dish = await db.dish.findUnique({
    where: {
      id: dishId,
    },
  });
  if (!dish) {
    throw new Error("Dish not found");
  }
  return  dish ;
};

export const updateDishAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  var dishId;
  try {
    const rawData = Object.fromEntries(formData);
    dishId = formData.get("id") as string;
    const file = formData.get("image") as File;
    const validatedFields = validateWithZodSchema(dishesSchema, rawData);
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await db.dish.update({
      where: {
        id: dishId,
      },
      data: {
        ...validatedFields,
        image: fullPath,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect("/admin/dishes/" + dishId);
};

export const updateDishImageAction = async (
  prevState: any,
  formData: FormData
) => {
  var dishId;
  try {
    dishId = formData.get("id") as string;
    const image = formData.get("image") as File;
    const validatedFields = validateWithZodSchema(imageOptionalSchema, {
      image,
    });
    if (!validatedFields.image) {
      return { message: "No image provided" };
    }
    const fullPath = await uploadImage(validatedFields.image);

    await db.dish.update({
      where: {
        id: dishId,
      },
      data: {
        image: fullPath,
      },
    });
    revalidatePath("/admin/dishes/" + dishId);
  } catch (error) {
    return renderError(error);
  }
  redirect("/admin/dishes");
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};
