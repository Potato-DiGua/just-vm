import { storeViewModels } from "./models";
import { configureStore } from "just-vm";

export const store = configureStore(storeViewModels);

export const store2 = configureStore(storeViewModels);
