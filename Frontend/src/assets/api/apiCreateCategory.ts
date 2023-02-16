import { ICategory } from "../interfaces/Interfaces";
import { API_URL } from "../config";

export async function apiCreateCategory(category: ICategory): Promise<ICategory> {

  const response = await fetch(`${API_URL}/category`, {
    method: "POST",
    body: JSON.stringify({
      title: `${category.title}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();

}
