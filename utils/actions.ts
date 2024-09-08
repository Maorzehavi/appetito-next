
import { dishesSchema } from "./schemas";
import db from "./db";
import { currentUser } from "@clerk/nextjs/server";
export const createDishAction = async (prevState: any, formData: FormData) => {
  "use server";
  try {
    const dataEntries = Object.fromEntries(formData.entries());
    console.log("FormData:", dataEntries); // Log to check form data

    const user = await currentUser();
    if (!user) throw new Error("Please sign in");

    const validatedData = dishesSchema.parse(dataEntries);
    await db.dish.create({
      data: validatedData,
    });

    return { message: `${validatedData.name} created` };
  } catch (error) {
    return renderError(error);
  }
};


const renderError = (error: unknown): { message: string } => {
    console.log(error);
    return {
      message: error instanceof Error ? error.message : "An error occurred",
    };
  };
