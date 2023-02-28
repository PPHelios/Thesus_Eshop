import { create } from "zustand";
import produce from "immer";

export const useCartStore = create((set, get) => ({
  cart: [],
  loggedIn: {},
  login: (data) =>
    set(
      produce((state) => {
        state.loggedIn = { ...get().loggedIn, ...data };
      })
    ),
  logout: () => {
    fetch("http://localhost:8081/users/logout", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get().loggedIn.token}`,
      },
    }).then(async (response) => {
      set(
        produce((state) => {
          state.loggedIn = {
            ...get().loggedIn,
            details: undefined,
            token: null,
          };
        })
      );
      window.localStorage.setItem("logout", Date.now());
    });
  },
  addItemToCart: (e) => {
    const cartItems = get().cart;
    const existingCartItem = cartItems.findIndex((item) => item.id === e.id);
    if (existingCartItem !== -1) {
      set(
        produce((state) => {
          state.cart[existingCartItem].quantity =
            state.cart[existingCartItem].quantity + 1;
        })
      );
    } else {
      set(
        produce((state) => {
          state.cart.push({ ...e, quantity: 1 });
        })
      );
    }
  },
  increaseCartItem: (itemId) => {
    const cartItems = get().cart;
    const existingCartItem = cartItems.findIndex((item) => item.id === itemId);
    set(
      produce((state) => {
        state.cart[existingCartItem].quantity =
          state.cart[existingCartItem].quantity + 1;
      })
    );
  },
  decreaseCartItem: (itemId) => {
    const cartItems = get().cart;
    let itemQuantity = cartItems.find((item) => item.id === itemId).quantity;

    const existingCartItem = cartItems.findIndex((item) => item.id === itemId);
    if (itemQuantity > 1) {
      set(
        produce((state) => {
          state.cart[existingCartItem].quantity =
            state.cart[existingCartItem].quantity - 1;
        })
      );
    } else {
      console.log("delete");
      const deleteItem = get().deleteCartItem;
      deleteItem(itemId);
    }
  },
  deleteCartItem: (itemId) => {
    const cartItems = get().cart;
    set(
      produce((state) => ({
        cart: cartItems.filter((item) => item.id !== itemId),
      }))
    );
  },
  cartTotalItems: () => {
    const cartItems = get().cart;
    return cartItems.reduce((total, next) => total + next.quantity, 0);
  },
  cartTotalItemsPrice: () => {
    const cartItems = get().cart;
    return cartItems.reduce(
      (total, next) => total + next.quantity * next.discountedPrice,
      0
    );
  },
  cartBeforeDiscountTotalItemsPrice: () => {
    const cartItems = get().cart;
    return cartItems.reduce(
      (total, next) => total + next.quantity * next.price,
      0
    );
  },
}));

// set((state) => ({ cart: newcart }))

// set(produce((state) =>  state.cart[index].q= newq ));
