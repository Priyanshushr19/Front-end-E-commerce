// import React, { createContext, useState } from 'react';
// import all_products from '../assets/all_product';

// // Create context
// export const ShopContext = createContext(null);

// // Provider component
// export default function ShopContextProvider({ children }) {
//   const contextValue = { all_products };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {children}
//     </ShopContext.Provider>
//   );
// }
// ShopContext.jsx
import React, { createContext, useEffect, useState } from 'react';
import all_products from '../assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_products.length; i++) {
    cart[all_products[i].id] = 0;
  }
  return cart;
};

const getCartFromLocalStorage = () => {
  const saved = localStorage.getItem('cartItems');
  return saved ? JSON.parse(saved) : getDefaultCart();
};

export default function ShopContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(getCartFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[itemId] > 0) updated[itemId]--;
      return updated;
    });
  };

  const getTotal = () => {
    let amount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const product = all_products.find((p) => p.id === Number(item));
        if (product) {
          amount += product.new_price * cartItems[item];
        }
      }
    }
    return amount;
  };

  const totalItems = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };

  const contextValue = {
    all_product: all_products,
    cartItems,
    addToCart,
    removeCart,
    getTotal,
    totalItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
}
