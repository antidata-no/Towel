import { IPackitem } from "../../interfaces/IPackitems";

 export const uiAddPackitemtoList = (newPackitem: IPackitem) => {
    setPackItems((prevPackitems) => [...prevPackitems, newPackitem]);
  };
