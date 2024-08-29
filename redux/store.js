import { configureStore } from "@reduxjs/toolkit";
import loginReducer  from "./slice/loginSlice";
import registerReducer from "./slice/registerSlice";

export default configureStore({
    reducer : {
        login: loginReducer,
        register: registerReducer,
    }
});