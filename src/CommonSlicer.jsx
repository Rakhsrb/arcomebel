import { createSlice } from "@reduxjs/toolkit";

const CommonReducer = createSlice({
  name: "common",
  initialState: {
    data: [
      {
        id: 0,
        amount: 3,
        count: 1,
        liked: false,
        bought: false,
        type: 'kitchen',
        title: "Мори кровать КРМ 900.1",
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
        title: "Гостиная модульная Lucido",
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
        title: "Ронда КРР1600.1",
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
        title: "Гранд шкаф верхний ",
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
        title: "Мори кровать КРМ 900.1",
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
        title: "Гостиная модульная Lucido",
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
        title: "Ронда КРР1600.1",
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
        title: "Гранд шкаф верхний ",
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
        title: "Мори кровать КРМ 900.1",
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
        title: "Гостиная модульная Lucido",
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
        title: "Ронда КРР1600.1",
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
        title: "Гранд шкаф верхний ",
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
        title: "Мори кровать КРМ 900.1",
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
        title: "Гостиная модульная Lucido",
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
        title: "Ронда КРР1600.1",
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
        title: "Гранд шкаф верхний ",
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
        title: "Мори кровать КРМ 900.1",
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
        title: "Гостиная модульная Lucido",
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
        title: "Ронда КРР1600.1",
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
        title: "Гранд шкаф верхний ",
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
        title: "Мори кровать КРМ 900.1",
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
        title: "Гостиная модульная Lucido",
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
        title: "Ронда КРР1600.1",
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
        title: "Гранд шкаф верхний ",
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
        title: "Мори кровать КРМ 900.1",
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
        title: "Гостиная модульная Lucido",
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
        title: "Ронда КРР1600.1",
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
        title: "Гранд шкаф верхний ",
        image: "./image/kitchen4.png",
        price: 5017,
        size: [
          561, 462, 333
        ]
      }
    ],
    likes: [],
    cart: [],
  },
  reducers: {
    productIncrement() { },
    addToCart(state, action) {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.cart.push({ ...action.payload, bought: true });
        state.data = state.data.map(item =>
          item.id == action.payload.id
            ? { ...action.payload, bought: true }
            : item)
      }
    },
    increment(state, action) {
      state.data = state.data.map((item) => item.id === action.payload.id
        ? { ...action.payload, count: action.payload.count + 1 }
        : item
      )
    },
    decrement(state, action) {
      state.data = state.data.map((item) => item.id === action.payload.id
        ? { ...action.payload, count: action.payload.count - 1 }
        : item
      )
    }
  },
});

export const { addToCart, increment, decrement } = CommonReducer.actions;
export default CommonReducer.reducer;
