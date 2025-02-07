import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState:{
        // myName: '',
        // active: false,
        allProducts: [],
        isLoading: false,
        cart: []

    },
    reducers:{
        // changeNameAction: (state, action) => {
        //     console.log(action.payload);
        //     state.myName = action.payload;
        // },
        // changeActiveAction: (state, action) => {
        //     state.active = !state.active;
        // }
        saveProductAction: (state, action) =>{
            console.log(action.payload);
            state.allProducts = action.payload;
            state.isLoading = true;
        },
        saveInCartAction: (state, action)=>{
            console.log(action.payload);
            //state.cart.find((el)=> el.id === action.payload.id);
            // if(findIndex){
            //     //dupliraj proizvod
            // }else{
            //     //dodadi go vo korpata
            // }
            state.cart.push(action.payload);
        }
    }
});

export const {saveProductAction, saveInCartAction} = productSlice.actions;
export default productSlice.reducer;