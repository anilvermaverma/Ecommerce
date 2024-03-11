import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productData : [],
    usetInfo: null
}
export const bazarSlice = createSlice({
    name: 'bazar',
    initialState,
    reducers:{
        addToCard:(state , action)=>{
            const item = state.productData.find((item)=> item._id === action.payload._id)
            if(item){
                item.quantity = action.payload.quantity
            }
            else{
                state.productData.push(action.payload)
            }
          
        }
    }
})
export const { addToCard } = bazarSlice.actions

export default bazarSlice.reducer