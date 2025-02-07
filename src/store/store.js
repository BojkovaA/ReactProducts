//2. Konfiguracija

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const store = configureStore({
    reducer:{
        productStore: productSlice,
        // userStor: userSlice;
    }
});

export default store;