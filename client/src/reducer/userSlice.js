import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        displayName: "",
        uid: "",
        accessToken: "",
        photoURL: "",
    },
    reducers: {
        loginUser: (state, action) => {
            state.displayName = action.payload.displayName;
            state.uid = action.payload.uid;
            state.accessToken = action.payload.accessToken;
            state.photoURL = action.payload.photoURL;
        },

        clearUser: (state) => {
            state.displayName = "";
            state.uid = "";
            state.accessToken = "";
            state.photoURL = "";
        },
    },
});

export const { loginUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
