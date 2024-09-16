import { createSlice } from '@reduxjs/toolkit';

const trackingSlice = createSlice({
    name: 'tracking',
    initialState: {
        tracking: null,
        error: null,
        loading: false,
    },
    reducers: {
        trackingSuccess(state, action) {
            state.tracking = action.payload;
            state.loading = false;
            state.error = null;
        },
        trackingFailure(state, action) {
            state.tracking = null;
            state.loading = false;
            state.error = action.payload;
        },
        trackingReset(state) {
            state.tracking = null;
            state.error = null;
            state.loading = false;
        },
    },
});

export const { trackingSuccess, trackingFailure, trackingReset } = trackingSlice.actions;
export default trackingSlice.reducer;
