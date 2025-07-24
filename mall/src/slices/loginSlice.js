import { createSlice } from "@reduxjs/toolkit";

const initState = {
    email: ''
}

const loginSlice = createSlice({
    name: 'LoginSlice',
    initialState: initState,

    reducers: {
        login: (state, action) => {
            console.log("로그인")
            const data = action.payload;
            return { email: data.email }
        },
        logout: (state, action) => {
            console.log("로그아웃")
            return { ...initState }
        }
    }
});

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer