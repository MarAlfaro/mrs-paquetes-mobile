import { configureStore } from "@reduxjs/toolkit";
import loginReducer  from "./slice/loginSlice";
import registerReducer from "./slice/registerSlice";
import registerProfile from "./slice/profileSlice";
import recoverReducer from "./slice/recoverSlice";

export default configureStore({
    reducer : {
        login: loginReducer,
        register: registerReducer,
        profile: registerProfile,
        recover: recoverReducer
    }
});