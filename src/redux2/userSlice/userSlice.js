import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: null,
    userEmail: null,

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload?.userName
            state.userEmail = action.payload?.userEmail

        },
        setLogoutUser: (state) => {
            state.userName = null
            state.userEmail = null

        },
        emailLogin: (state, action) => {
            state.userName = action.payload.userName
        }

    }

});

export const { setActiveUser, setLogoutUser, emailLogin } = userSlice.actions
export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail
export const selectIsUser = state => state.user.user
export default userSlice.reducer