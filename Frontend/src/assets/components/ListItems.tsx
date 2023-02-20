import React from "react";
import DeletePackitemButton from "./DeletePackitemButton";
import ShowPackItem from "./ShowPackitem";
import { IPackitem, ICategory } from "../interfaces/Interfaces";

const ListItems = ({ category }: { category: ICategory }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">

          <tbody>
            {category.items.map((packitem) => (
              <tr key={packitem._id}>
                <td>
                  <ShowPackItem categoryid={category._id} packitem={packitem} />

                  {/*<DeletePackitemButton deleteThisPackitem={packitem} /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
};

export default ListItems;
