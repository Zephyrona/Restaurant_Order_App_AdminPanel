import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INC_QUANTITY,
  DEC_QUANTITY,
} from "../types/cart.types";

const initialState = {
  cart: [],
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 50,
      imgUrl: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 2,
      name: "Product 2",
      price: 100,
      imgUrl: "https://picsum.photos/id/238/200/300",
    },
    {
      id: 3,
      name: "Product 3",
      price: 200,
      imgUrl: "https://picsum.photos/id/239/200/300",
    },
    {
      id: 4,
      name: "Product 4",
      price: 125,
      imgUrl: "https://picsum.photos/id/240/200/300",
    },
    {
      id: 5,
      name: "Product 5",
      price: 250,
      imgUrl: "https://picsum.photos/id/241/200/300",
    },
    {
      id: 6,
      name: "Product 6",
      price: 99,
      imgUrl: "https://picsum.photos/id/242/200/300",
    },
  ],
};

const addToCart = (id, state) => {
  const findExistingProduct = state.cart.find((product) => product.id === id);
  const findIncomingProduct = state.products.find(
    (product) => product.id === id
  );

  if (findExistingProduct) {
    const updatedProductQuantity = state.cart.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    return { ...state, cart: updatedProductQuantity };
  } else {
    return {
      ...state,
      cart: [...state.cart, { ...findIncomingProduct, quantity: 1 }],
    };
  }
};

const removeFromCart = (id, state) => {
  const filteredProducts = state.cart.filter((product) => product.id !== id);
  return {
    ...state,
    cart: filteredProducts,
  };
};

const incrementQuantity = (id, state) => {
  const updatedProductQuantity = state.cart.map((product) =>
    product.id === id ? { ...product, quantity: product.quantity + 1 } : product
  );
  return { ...state, cart: updatedProductQuantity };
};

const decrementQuantity = (id, state) => {
  const findProductQuantity = state.cart.find(
    (product) => product.id === id
  )?.quantity;

  if (findProductQuantity === 1) {
    const filteredProducts = state.cart.filter((product) => product.id !== id);
    return {
      ...state,
      cart: filteredProducts,
    };
  } else {
    const updatedProductQuantity = state.cart.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    return { ...state, cart: updatedProductQuantity };
  }
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(action.payload, state);
    case REMOVE_FROM_CART:
      return removeFromCart(action.payload, state);
    case INC_QUANTITY:
      return incrementQuantity(action.payload, state);
    case DEC_QUANTITY:
      return decrementQuantity(action.payload, state);
    default:
      return state;
  }
};
