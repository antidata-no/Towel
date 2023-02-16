import { IPackitem } from "../interfaces/Interfaces";
import { API_URL } from "../config";

export async function apiDeletePackitem(toBeDeleted: IPackitem) {
  fetch(`${API_URL}/packitem/${toBeDeleted._id}`, {
    method: "DELETE",
  });
}
