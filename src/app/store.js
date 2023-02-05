import { configureStore } from "@reduxjs/toolkit";
import cakeReducers from "../features/Cake/cakeSlice";
import icecreamReducers from "../features/icecream/icecreamSlice";
import userReducers from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducers,
    icecream: icecreamReducers,
    user: userReducers,
  },
});

export default store;
