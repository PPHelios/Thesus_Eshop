import produce from "immer";
import { apiRequest } from "./apiRequest";
export const userSlice = (set, get) => ({
  user: {
    cart: [],
    theme: "light",
  },
  allUsers: [],

  toggleColorMode: () => {
    set(
      produce((state) => {
        state.user.theme = get().user.theme === "light" ? "dark" : "light";
      })
    );
  },

  sync: async () => {
    try {
      const res = await fetch("http://localhost:8000/users/sync", {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const user = await res.json();
      // console.log(user);
      if (user?.cart) {
        // console.log("Logged in" + user.cart);
        set(
          produce((state) => {
            state.user = user;
          })
        );
      }
    } catch (e) {
      // console.log("********************************");
      // console.log(e);
    }
  },

  getAllUsers: async () => {
    const fetchedUsers = await apiRequest(
      "http://localhost:8000/users/allusers",
      "GET"
    );
    set((state) => ({ allUsers: fetchedUsers }));
    // console.dir(fetchedUsers);
  },
  addUser: async (newUser) => {
    const res = await apiRequest(
      "http://localhost:8000/users/newuser",
      "POST",
      newUser
    );
    return res;
  },
  findUser: (userId) => {
    const userToEdit = get().allUsers.find((user) => {
      return user._id === userId;
    });
    return userToEdit;
  },
  editUser: async (userId, formData) => {
    const usersBeforeSubmit = get().allUsers;
    const newusersList = get().allUsers.filter((user) => user._id !== userId);
    newusersList.push(formData);
    try {
      const data = await apiRequest(
        `http://localhost:8000/users/${userId}/edit`,
        "PUT",
        { formData }
      );
      set((state) => ({ allUsers: newusersList }));
    } catch (err) {
      set((state) => ({ allUsers: usersBeforeSubmit }));
      throw new Error(err.message);
    }
  },
  deleteUser: async ({ id }) => {
    const usersBeforeSubmit = get().allUsers;
    const newUsersList = get().allUsers.filter((user) => user._id !== id);
    set((state) => ({ allUsers: newUsersList }));
    try {
      const data = await apiRequest(
        "http://localhost:8000/users/deleteuser",
        "DELETE",
        { id }
      );
      return data.message;
    } catch (err) {
      set((state) => ({ users: usersBeforeSubmit }));
      throw new Error(err.message);
    }
  },

  login: async (data) => {
    try {
      const user = await apiRequest(
        "http://localhost:8000/users/login",
        "POST",
        data
      );

      if (user) {
        // console.log("Logged in" + user.email);
        set(
          produce((state) => {
            state.user = user;
          })
        );
        return true
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },

  logout: async () => {
    const res = await apiRequest("http://localhost:8000/users/logout", "POST");
    console.log(res);
    set(
      produce((state) => {
        state.user = { cart: [],theme:get().user.theme };
      })
    );
    set(
      produce((state) => {
        state.allUsers = [];
      })
    );
    // console.log("Logged Out!!!");

    window.localStorage.setItem("logout", Date.now());
  },
  updateDbCart: async (data) => {
    const res = await apiRequest(
      `http://localhost:8000/users/updatecart`,
      "PUT",
      data
    );
    return res;
  },

  addItemToCart: async (product) => {
    const cartItems = get().user.cart;
    // console.log(cartItems);
    const existingCartItem = cartItems.findIndex(
      (item) => item._id === product._id
    );
    if (existingCartItem !== -1) {
      set(
        produce((state) => {
          state.user.cart[existingCartItem].quantity =
            state.user.cart[existingCartItem].quantity + 1;
        })
      );
    } else {
      set(
        produce((state) => {
          state.user.cart.push({ ...product, quantity: 1 });
        })
      );
    }
    try {
      const updatedCart = await get().updateDbCart({
        userId: get().user._id,
        cart: get().user.cart,
      });
    } catch (err) {
      set((state) => ({ user: { ...get().user, cart: cartItems } }));
    }
  },
  increaseCartItem: async (itemId) => {
    const cartItems = get().user.cart;
    const existingCartItem = cartItems.findIndex((item) => item._id === itemId);
    set(
      produce((state) => {
        state.user.cart[existingCartItem].quantity =
          state.user.cart[existingCartItem].quantity + 1;
      })
    );
    try {
      const updatedCart = await get().updateDbCart({
        userId: get().user._id,
        cart: get().user.cart,
      });
    } catch (err) {
      set((state) => ({ user: { ...get().user, cart: cartItems } }));
    }
  },
  decreaseCartItem: async (itemId) => {
    const cartItems = get().user.cart;
    let itemQuantity = cartItems.find((item) => item._id === itemId).quantity;

    const existingCartItem = cartItems.findIndex((item) => item._id === itemId);
    if (itemQuantity > 1) {
      set(
        produce((state) => {
          state.user.cart[existingCartItem].quantity =
            state.user.cart[existingCartItem].quantity - 1;
        })
      );
    } else {
      // console.log("delete");
      const deleteItem = get().deleteCartItem;
      deleteItem(itemId);
    }
    try {
      const updatedCart = await get().updateDbCart({
        userId: get().user._id,
        cart: get().user.cart,
      });
    } catch (err) {
      set(
        produce((state) => {
          state.user.cart = cartItems;
        })
      );
    }
  },
  deleteCartItem: async (itemId) => {
    const cartItems = get().user.cart;
    const filteredCartItems = cartItems.filter((item) => item._id !== itemId);
    set(
      produce((state) => {
        state.user.cart = filteredCartItems;
      })
    );
    try {
      const updatedCart = await get().updateDbCart({
        userId: get().user._id,
        cart: filteredCartItems,
      });
      // console.log("Cart Updated");
    } catch (err) {
      set(
        produce((state) => {
          state.user.cart = cartItems;
        })
      );
    }
  },
  cartTotalItems: () => {
    if (get().user.cart) {
      const cartItems = get().user.cart;
      return cartItems.reduce((total, next) => total + next.quantity, 0);
    } else {
      return 0;
    }
  },
  cartTotalItemsPrice: () => {
    const cartItems = get().user.cart;
    return cartItems.reduce(
      (total, next) => total + next.quantity * next.discountedPrice,
      0
    );
  },
  cartBeforeDiscountTotalItemsPrice: () => {
    const cartItems = get().user.cart;
    return cartItems.reduce(
      (total, next) => total + next.quantity * next.price,
      0
    );
  },
});

// set((state) => ({ cart: newcart }))

// set(produce((state) =>  state.cart[index].q= newq ));
