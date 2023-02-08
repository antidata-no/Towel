import { IPackitem } from "../interfaces/IPackitems";
import { API_URL } from "../config";

export async function apiTogglePackitemCheckbox(_id: IPackitem["_id"], checked: IPackitem["checked"]) {
  fetch(`${API_URL}/updatepackitem/${_id}`, {
    method: "POST",
    body: JSON.stringify({
      checked,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
