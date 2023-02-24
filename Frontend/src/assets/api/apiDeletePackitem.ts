import { ICategory, IPackitem } from "../interfaces/Interfaces";
import { API_URL } from "../config";

export async function apiDeletePackitem(category: ICategory["_id"], toBeDeleted: IPackitem) {
  fetch(`${API_URL}/category/${category}/packitem/${toBeDeleted._id}`, {
    method: "DELETE",
  });
}
