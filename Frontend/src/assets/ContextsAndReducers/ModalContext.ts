import { createContext } from "react";

const showErrorTemplate = () => {};

// todo: put title and message in ShowerrorModalContext
export const ShowerrorModalContext = createContext<boolean>(false);
export const SetShowerrorModalContext = createContext<React.Dispatch<React.SetStateAction<boolean>>>(showErrorTemplate);


