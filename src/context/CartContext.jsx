import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

 const addToCart = (product) => {
  setCart((prev) => {
    const existingItem = prev.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      return prev.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    }

    return [
      ...prev,
      {
        ...product,
        quantity: 1,
      },
    ];
  });
};

  const removeFromCart = (index) => {
    setCart((prev) =>
      prev.filter((_, itemIndex) => itemIndex !== index)
    );
  };
  const increaseQuantity = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};
  const clearCart = () => {
  setCart([]);
};

  return (
    <CartContext.Provider
  value={{
  cart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
}}
>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}