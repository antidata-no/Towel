import { ICategory } from "../interfaces/Interfaces";
import { API_URL } from "../config";

export async function apiGetCategories(): Promise<ICategory[]>  {
    const response = await fetch(`${API_URL}/category`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
}