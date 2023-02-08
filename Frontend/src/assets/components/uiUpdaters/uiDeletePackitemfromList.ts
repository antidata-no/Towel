import { IPackitem } from "../../interfaces/IPackitems";


 export const uiDeletePackitemfromList = (deleteThisPackItem: IPackitem) => {
    setPackItems((prevPackitems) =>
      prevPackitems.filter(
        (packitem) => packitem._id !== deleteThisPackItem._id
      )
    );
  };