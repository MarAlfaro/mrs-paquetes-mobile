import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null,
        isLoggedIn: false,
        error: null,
    },
    reducers: {
        loginSuccess(state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.error = null;
        },
        loginFailure(state, action) {
            state.user = null;
            state.isLoggedIn = false;
            state.error = action.payload;
        },
        logout(state) {
            state.user = null;
            state.isLoggedIn = false;
            state.error = null;
        },
    },
});

export const { loginSuccess, loginFailure, logout } = loginSlice.actions;
export default loginSlice.reducer;
