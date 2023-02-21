import { createContext, useState } from "react";

//const [showerror, setShowerror] = useState(false);

const showErrorTemplate = () => {};

export const ShowerrorModalContext = createContext<boolean>(false);
export const SetShowerrorModalContext = createContext<React.Dispatch<React.SetStateAction<boolean>>>(showErrorTemplate);


