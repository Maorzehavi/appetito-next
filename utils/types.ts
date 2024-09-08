export type actionFunction = (
    prevState: any,
    formData: FormData
  ) => Promise<{ message: string }>;

  export type Dish = {
    id: string;
    name: string;
    description: string | null;
    category: 'PIZZA' | 'PASTA' | 'SALAD' | 'OTHER';
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
};