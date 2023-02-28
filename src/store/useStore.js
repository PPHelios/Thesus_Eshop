import { create } from "zustand";
import { productsSlice } from "./productsSlice";
import { userSlice } from "./userSlice";

export const useStore = create((...a) => ({
  ...productsSlice(...a),
  ...userSlice(...a),
}));
