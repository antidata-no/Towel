
export interface ICategory {
  title: string;
  _id: string;
  items: IPackitem[];
}
export interface IDispatchAction {
  type: string;
  payload: ICategory[];
}
export interface IPackitem {
  title: string;
  _id: string;
  checked: boolean;
}

export interface IDispatchActionPackitem {
  type: string;
  category: ICategory["_id"];
  payload: IPackitem[];
}

export interface IShowPackitem {
  categoryid: ICategory["_id"];
  packitem: IPackitem;
}

export interface IDeletePackitem {
  category: ICategory;
  packitem: IPackitem;
}

export interface IError {
  title: string;
  message: string;
  show: boolean;
  setShow: (show: boolean) => void;
}

export interface IInputandButton {
  onSubmitHandler: (e: React.FormEvent<Element>) => void;
  labelid: string;
  labelText: string;
  placeholder: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonText: string;
  value: string;
}




/*
export interface IPackitemlist {
  packitemlist: IPackitem[];
  uiDeletePackitemfromList: (deletePackitem: IPackitem) => void;
}

export interface IDeletePackitem {
  deleteThisPackitem: IPackitem;
  //uiDeletePackitemfromList: (deletePackitem: IPackitem) => void;
}

export interface IUpdateIPackitemlist {
  uiAddPackitemtoList: (newIpackitem: IPackitem) => void;
  uiUpdatePackitem: (
    idToUpdate: IPackitem["_id"],
    newIpackitem: IPackitem
  ) => boolean;
}
*/

