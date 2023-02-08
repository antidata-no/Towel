import { IPackitem } from "../interfaces/IPackitems";
import { API_URL } from "../config";

export async function apiDeletePackitem(toBeDeleted: IPackitem) {
  fetch(`${API_URL}/packitems/${toBeDeleted._id}`, {
    method: "DELETE",
  });
}
