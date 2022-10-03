import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    allProducts: [],
    priceCount: 0

}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct(state, action) {
            console.log('action', action)
            state.allProducts = action.payload
        },
        setPriceCount(state, action) {
            console.log('action', action)
          state.priceCount += action.payload
            }
    }
})


export const {setProduct, setPriceCount} = productSlice.actions
export const productSelector = state => state.product.allProducts
export const countSelector = state => state.product.priceCount
export default productSlice.reducer



export function fetchRecipes() {
    return async dispatch => {
        dispatch(setProduct())
        try {
            const response = await fetch('https://fakestoreapi.com/products',{
                // method: 'GET',
                // mode: 'no-cors',
                // headers: new Headers({ 'Content-type': 'application/json'}),
            })
            const data = await response.json()
            dispatch(setProduct(data))
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
}