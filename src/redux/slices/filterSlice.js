import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    category: "men's clothing",
    sort: {
        name: "популярности",
        sortProperty: "rating"
    }
}

export const filterSlice = createSlice({
  name: "filter",
    initialState,
    reducers: {
      setCategory(state, action){
          console.log('action',action)
          state.category = action.payload
      }
    }
})

export const { setCategory } = filterSlice.actions

export default filterSlice.reducer