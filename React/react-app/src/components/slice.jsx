import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    users:[],
};
export const userSlice = createSlice({
    name :'kannan',
    initialState,
    reducers:{
        addUser:(state,action)=>
        {
            state.users=[...state.users,action.payload];

        },
        deleteUser:(state,action)=>
        {
            state.users = state.users.filter((user,index)=>index!== payload);
        }
    }
})
export const {addUser,deleteUser}= userSlice.actions;
export default userSlice.reducer;