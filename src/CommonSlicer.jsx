import { createSlice } from "@reduxjs/toolkit";

const CommonReducer = createSlice({
  name: "common",
  initialState: {
    data: [
      {
        id: 0,
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
  },
});

export const { productIncrement } = CommonReducer.actions;
export default CommonReducer.reducer;
