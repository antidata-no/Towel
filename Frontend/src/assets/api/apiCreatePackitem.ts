import { ICategory, IPackitem } from "../interfaces/Interfaces";
import { API_URL } from "../config";

export async function apiCreatePackitem(category: ICategory["_id"], packitem: IPackitem): Promise<IPackitem> {

  const response = await fetch(`${API_URL}/category/${category}/packitem`, {
    method: "POST",
    body: JSON.stringify({
      title: `${packitem.title}`,
      checked: `${packitem.checked}`
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();

}
