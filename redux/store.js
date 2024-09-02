import { configureStore } from "@reduxjs/toolkit";
import loginReducer  from "./slice/loginSlice";
import registerReducer from "./slice/registerSlice";
import registerProfile from "./slice/profileSlice";

export default configureStore({
    reducer : {
        login: loginReducer,
        register: registerReducer,
        profile: registerProfile
    }
});