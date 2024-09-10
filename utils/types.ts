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


export const catigores = [
    { name: 'פיצה', value: 'PIZZA' },
    { name: 'פסטה', value: 'PASTA' },
    { name: 'סלט', value: 'SALAD' },
    { name: 'אחר', value: 'OTHER' },
  ]