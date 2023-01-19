import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : "user",
    initialState : {name : "kim", age : 20 },
    reducers : {
        changeName(state) {
            state.name = "park";
        },
        increaseAge(state, action) {
            state.age += action.payload;
        }
    }
})

export default user;
export let { changeName, increaseAge } = user.actions