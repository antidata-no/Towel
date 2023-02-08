//import { TListItems } from "../types/Ttypes";

export interface IPackitem {
    title: string; 
    _id: string; 
    checked: boolean;
}

export interface IPackitemlist {
    packitemlist: IPackitem[];
    uiDeletePackitemfromList: (deletePackitem: IPackitem) => void;
}

export interface IDeletePackitem {
    deleteThisPackitem: IPackitem;
    uiDeletePackitemfromList: (deletePackitem: IPackitem) => void;
}

export interface IUpdateIPackitemlist {
    uiAddPackitemtoList: (newIpackitem: IPackitem) => void;
    uiUpdatePackitem: (idToUpdate: IPackitem["_id"], newIpackitem: IPackitem) => boolean;
}




