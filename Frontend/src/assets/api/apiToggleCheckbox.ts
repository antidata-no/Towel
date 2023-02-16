import { ICategory, IPackitem } from "../interfaces/Interfaces";
import { API_URL } from "../config";

export async function apiTogglePackitemCheckbox(categoryid: ICategory["_id"], packitem: IPackitem) {
  fetch(`${API_URL}/category/${categoryid}/packitem/${packitem._id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: packitem.title,
      checked: packitem.checked,
      order: 0
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
