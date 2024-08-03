import { createContext } from "react";
import { StoreType } from "..";

export const MVVMContext = createContext<StoreType | null>(null);
export const Provider = MVVMContext.Provider;
