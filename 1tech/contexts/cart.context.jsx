import { createContext, useState, useEffect, useReducer } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, dispatch] = useReducer(CartItemsReducer, []);
  const [cartCount, setCartCount] = useState({ itemsCount: 0, total: 0 });
  useEffect(() => {
    console.log("misfire");
    const itemsCount = cartItems.reduce(
      (total, next) => total + next.quantity,
      0
    );
    const total = cartItems.reduce(
      (total, next) => total + next.price * next.quantity,
      0
    );
    setCartCount({ itemsCount, total });
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    dispatch,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function CartItemsReducer(cartItems, action) {
  switch (action.type) {
    case "add": {
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === action.productToAdd.id
      );

      if (existingCartItem) {
        return cartItems.map((cartItem) =>
          cartItem.id === action.productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...cartItems, { ...action.productToAdd, quantity: 1 }];
    }
    case "increment": {
      return cartItems.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    case "decrement": {
      const { quantity, id } = action.item;

      if (quantity === 1) {
        return cartItems.filter((item) => item.id !== id);
      } else {
        return cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    }
    case "delete": {
      return cartItems.filter((item) => item.id !== action.id);
    }
  }
}
