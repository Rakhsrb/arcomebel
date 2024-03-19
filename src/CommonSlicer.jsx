import { createSlice } from "@reduxjs/toolkit";

function setLocal(qayer, nima) {
  localStorage.setItem(qayer, JSON.stringify(nima))
}

const CommonReducer = createSlice({
  name: "common",
  initialState: {
    data: JSON.parse(localStorage.getItem('data')) || [
      {
        id: 0,
        amount: 3,
        count: 1,
        liked: false,
        bought: false,
        type: 'kitchen',
        title: "мори кровать крм 900.1",
        image: "./image/kitchen1.png",
        price: 5017,
        size: [
          441, 235, 344
        ]
      },
      {
        id: 1,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'kitchen',
        title: "гостиная модульная lucido",
        image: "./image/kitchen2.png",
        price: 5017,
        size: [
          12, 345, 567
        ]
      },
      {
        id: 2,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'kitchen',
        title: "ронда крр1600.1",
        image: "./image/kitchen3.png",
        price: 5017,
        size: [
          145, 442, 366
        ]
      },
      {
        id: 3,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'kitchen',
        title: "гранд шкаф верхний ",
        image: "./image/kitchen4.png",
        price: 5017,
        size: [
          561, 462, 333
        ]
      }
      ,
      {
        id: 4,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'guestroom',
        title: "мори кровать крм 900.1",
        image: "./image/kitchen1.png",
        price: 5017,
        size: [
          441, 235, 344
        ]
      },
      {
        id: 5,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'guestroom',
        title: "гостиная модульная lucido",
        image: "./image/kitchen2.png",
        price: 5017,
        size: [
          12, 345, 567
        ]
      },
      {
        id: 6,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'guestroom',
        title: "ронда крр1600.1",
        image: "./image/kitchen3.png",
        price: 5017,
        size: [
          145, 442, 366
        ]
      },
      {
        id: 7,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'guestroom',
        title: "гранд шкаф верхний ",
        image: "./image/kitchen4.png",
        price: 5017,
        size: [
          561, 462, 333
        ]
      }
      ,
      {
        id: 8,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'bedroom',
        title: "мори кровать крм 900.1",
        image: "./image/kitchen1.png",
        price: 5017,
        size: [
          441, 235, 344
        ]
      },
      {
        id: 9,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'bedroom',
        title: "гостиная модульная lucido",
        image: "./image/kitchen2.png",
        price: 5017,
        size: [
          12, 345, 567
        ]
      },
      {
        id: 10,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'bedroom',
        title: "ронда крр1600.1",
        image: "./image/kitchen3.png",
        price: 5017,
        size: [
          145, 442, 366
        ]
      },
      {
        id: 11,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'bedroom',
        title: "гранд шкаф верхний ",
        image: "./image/kitchen4.png",
        price: 5017,
        size: [
          561, 462, 333
        ]
      }
      ,
      {
        id: 12,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'hool',
        title: "мори кровать крм 900.1",
        image: "./image/kitchen1.png",
        price: 5017,
        size: [
          441, 235, 344
        ]
      },
      {
        id: 13,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'hool',
        title: "гостиная модульная lucido",
        image: "./image/kitchen2.png",
        price: 5017,
        size: [
          12, 345, 567
        ]
      },
      {
        id: 14,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'hool',
        title: "ронда крр1600.1",
        image: "./image/kitchen3.png",
        price: 5017,
        size: [
          145, 442, 366
        ]
      },
      {
        id: 15,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'hool',
        title: "гранд шкаф верхний ",
        image: "./image/kitchen4.png",
        price: 5017,
        size: [
          561, 462, 333
        ]
      }
      , {
        id: 16,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'coupe',
        title: "мори кровать крм 900.1",
        image: "./image/kitchen1.png",
        price: 5017,
        size: [
          441, 235, 344
        ]
      },
      {
        id: 17,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'coupe',
        title: "гостиная модульная lucido",
        image: "./image/kitchen2.png",
        price: 5017,
        size: [
          12, 345, 567
        ]
      },
      {
        id: 18,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'coupe',
        title: "ронда крр1600.1",
        image: "./image/kitchen3.png",
        price: 5017,
        size: [
          145, 442, 366
        ]
      },
      {
        id: 19,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'coupe',
        title: "гранд шкаф верхний ",
        image: "./image/kitchen4.png",
        price: 5017,
        size: [
          561, 462, 333
        ]
      },
      {
        id: 20,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'babyroom',
        title: "мори кровать крм 900.1",
        image: "./image/kitchen1.png",
        price: 5017,
        size: [
          441, 235, 344
        ]
      },
      {
        id: 21,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'babyroom',
        title: "гостиная модульная lucido",
        image: "./image/kitchen2.png",
        price: 5017,
        size: [
          12, 345, 567
        ]
      },
      {
        id: 22,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'babyroom',
        title: "ронда крр1600.1",
        image: "./image/kitchen3.png",
        price: 5017,
        size: [
          145, 442, 366
        ]
      },
      {
        id: 23,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'babyroom',
        title: "гранд шкаф верхний ",
        image: "./image/kitchen4.png",
        price: 5017,
        size: [
          561, 462, 333
        ]
      }
      ,
      {
        id: 24,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'sofa',
        title: "мори кровать крм 900.1",
        image: "./image/kitchen1.png",
        price: 5017,
        size: [
          441, 235, 344
        ]
      },
      {
        id: 25,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'sofa',
        title: "гостиная модульная lucido",
        image: "./image/kitchen2.png",
        price: 5017,
        size: [
          12, 345, 567
        ]
      },
      {
        id: 26,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'sofa',
        title: "ронда крр1600.1",
        image: "./image/kitchen3.png",
        price: 5017,
        size: [
          145, 442, 366
        ]
      },
      {
        id: 27,
        amount: 5,
        count: 1,
        liked: false,
        bought: false,
        type: 'sofa',
        title: "гранд шкаф верхний ",
        image: "./image/kitchen4.png",
        price: 5017,
        size: [
          561, 462, 333
        ]
      }
    ],
    likes: JSON.parse(localStorage.getItem('likes')) || [],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  },
  reducers: {
    addToCart(state, action) {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.cart.push({ ...action.payload, bought: true });
        state.data = state.data.map(item =>
          item.id == action.payload.id
            ? { ...action.payload, bought: true }
            : item)
        setLocal('data', state.data)
        setLocal('cart', state.cart)
      }
    },
    addToSave(state, action) {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.cart.push({ ...action.payload, bought: true });
        state.data = state.data.map(item =>
          item.id == action.payload.id
            ? { ...action.payload, bought: true }
            : item)
        setLocal('data', state.data)
        setLocal('cart', state.cart)
      }
    },
    increment(state, action) {
      state.data = state.data.map((product) =>
        product.id === action.payload.id && action.payload.count < action.payload.amount
          ? { ...action.payload, count: action.payload.count + 1 }
          : product
      )
    },
    decrement(state, action) {
      state.data = state.data.map((item) =>
        item.id === action.payload.id && action.payload.count > 1
          ? { ...action.payload, count: action.payload.count - 1 }
          : item
      )
    },
    cartincrement(state, action) {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id && action.payload.count < action.payload.amount
          ? { ...action.payload, count: action.payload.count + 1 }
          : item
      )
    },
    cartdecrement(state, action) {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id && action.payload.count > 1
          ? { ...action.payload, count: action.payload.count - 1 }
          : item
      )
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter(item => item.id !== action.payload.id)
      state.data = state.data.map(item => item.id == action.payload.id ?
        { ...item, bought: false } : item
      )
      setLocal('data', state.data)
      setLocal('cart', state.cart)
    },
    setLike(state, action) {
      const existingItem = state.likes.find((item) => item.id === action.payload.id)
      if (!existingItem) {
        state.data = state.data.map((item) => item.id == action.payload.id
          ? { ...item, liked: true }
          : item
        )
        state.likes.push(action.payload)
        setLocal('likes', state.likes)
        setLocal('data', state.data)
      }
    },
    removeLike(state, action) {
      state.data = state.data.map((item) => item.id == action.payload.id
        ? { ...item, liked: false }
        : item
      )
      state.likes = state.likes.filter((item) => item.id !== action.payload.id)
      setLocal('likes', state.likes)
      setLocal('data', state.data)
    }
  },
});

export const {
  addToCart,
  increment,
  decrement,
  cartdecrement,
  cartincrement,
  removeFromCart,
  setLike,
  removeLike,
  addToSave
} = CommonReducer.actions;
export default CommonReducer.reducer;
