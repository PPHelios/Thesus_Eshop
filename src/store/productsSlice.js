import produce from "immer";
import { apiRequest } from "./apiRequest";
export const productsSlice = (set, get) => ({
  products: [],
  getProducts: async () => {
    try {
      const fetchedProducts = await apiRequest(
        "http://localhost:8000/products/getProducts",
        "GET"
      );
      // console.log(fetchedProducts);
      set((state) => ({ products: fetchedProducts }));
    } catch (err) {
      throw new Error(err.message);
    }
  },
  addProduct: async (newProduct) => {
    try {
      const res = await apiRequest(
        "http://localhost:8000/products/addProduct",
        "POST",
        newProduct
      );
      // console.log(res);
      set(
        produce((state) => {
          state.products.push(res);
        })
      );

      return res;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  editProduct: async (productId, formData) => {
    const productsBeforeSubmit = get().products;
    const newProductsList = get().products.filter(
      (product) => product._id !== productId
    );
    newProductsList.push(formData);

    try {
      const data = await apiRequest(
        `http://localhost:8000/products/${productId}/edit`,
        "PUT",
        { formData }
      );
      set((state) => ({ products: newProductsList }));
    } catch (err) {
      set((state) => ({ products: productsBeforeSubmit }));
      throw new Error(err.message);
    }
  },
  deleteProduct: async ({ id }) => {
    const productsBeforeSubmit = get().products;
    const newProductsList = get().products.filter(
      (product) => product._id !== id
    );
    set((state) => ({ products: newProductsList }));
    try {
      const data = await apiRequest(
        "http://localhost:8000/products/deleteProduct",
        "DELETE",
        { id }
      );
      return data.message;
    } catch (err) {
      set((state) => ({ products: productsBeforeSubmit }));
      throw new Error(err.message);
    }
  },
  findProduct: async (productId) => {
    const productToEdit = await get().products.find((product) => {
      return product._id === productId;
    });
    return productToEdit;
  },
});

//set(produce((state) => (state.cart[index].q = newq)));
