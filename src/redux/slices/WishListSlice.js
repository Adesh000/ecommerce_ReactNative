import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
  name: 'WishList',
  initialState: {
    data: null
  },
  reducers: {
    addItemToWishList(state, action) {
      let tempData = state.data
      tempData.push(action.payload)
      state.data = tempData
    }
  }
})

export const {addItemToWishList} = WishListSlice.actions
export default WishListSlice.reducer