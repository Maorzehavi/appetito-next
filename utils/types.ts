export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type Dish = {
  id: string;
  name: string;
  description: string | null;
  category: "PIZZA" | "PASTA" | "SALAD" | "OTHER";
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export const catigores = [
  { name: "פיצה", value: "PIZZA" },
  { name: "פסטה", value: "PASTA" },
  { name: "סלט", value: "SALAD" },
  { name: "אחר", value: "OTHER" },
];

export const getCategoryName = (value: string) => {
  const category = catigores.find((cat) => cat.value === value);
  return category ? category.name : value; // Fallback to the value if no match is found
};
