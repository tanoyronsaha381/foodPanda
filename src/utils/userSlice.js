const { createSlice } = require("@reduxjs/toolkit");

const initialState ={
    isLoggedIn : false,
    userInfo : null,
    isDarkMode : false
}
const userSlice= createSlice(
{
    name: "user",
    initialState,
    reducers:{
        setUser : (state, action)=>{
            state.isLoggedIn = true;
            state.userInfo = action.payload;
        },
        setLogOutState : (state)=>{
            state.isLoggedIn = false;
            state.userInfo = null;
        },
        setDarkMode : (state)=>{
            state.isDarkMode = !state.isDarkMode;
        }
    }
}
);

export const {setUser, setLogOutState, setDarkMode} = userSlice.actions;
export default userSlice.reducer;