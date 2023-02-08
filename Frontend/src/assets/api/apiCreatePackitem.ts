import { IPackitem } from "../interfaces/IPackitems";
import { API_URL } from "../config";

export async function apiCreatePackitem(packitem: IPackitem): Promise<IPackitem> {

  const response = await fetch(`${API_URL}/packitems`, {
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
