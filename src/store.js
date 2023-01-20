/* eslint-disable */

import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

let stock = createSlice({
    name : "stock",
    initialState : [10, 11, 12]
})

let cartData = createSlice({
    name : "cartData",
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ],
      reducers: {
        increaseNumber(state, action) {
            state.find((x) => x.id === action.payload).count++;
        },
        addCart(state, action) {
            let newData = { id: action.payload.id, name: action.payload.title };
            let inCartData = state.find((x) => x.id == newData.id)
            if (inCartData == undefined) {
                newData.count = 1
                state.push(newData);
            }
            else inCartData.count++;
        }
      }
})

let shoesData = createSlice({
    name: "shoesData",
    initialState : [
        {
          id : 0,
          title : "White and Black",
          content : "Born in France",
          price : 120000
        },
        {
          id : 1,
          title : "Red Knit",
          content : "Born in Seoul",
          price : 110000
        },
        {
          id : 2,
          title : "Grey Yordan",
          content : "Born in the States",
          price : 130000
        }
      ]
})


export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cartData : cartData.reducer,
    shoesData : shoesData.reducer
  }
})
export let { increaseNumber, addCart } = cartData.actions