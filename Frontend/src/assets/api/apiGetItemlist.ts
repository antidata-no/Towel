import { IPackitem } from "../interfaces/IPackitems";
import { API_URL } from "../config";

export async function apiGetItemlist(): Promise<IPackitem[]>  {
    const response = await fetch(`${API_URL}/listpackitems`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
}