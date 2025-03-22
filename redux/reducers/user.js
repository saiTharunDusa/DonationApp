import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    firstName : "Sai Tharun",
    lastName : "Dusa",
    userId : 1,
};


const user = createSlice({
    name : 'user',
    initialState : initialState,
    reducers : {
        updateFirstName : (state, action) => {
            state.firstName = action.payload.firstName;
        },
        resetToInitialState: () => {
            return initialState;
        },
    }
})

export const {updateFirstName, resetToInitialState} = user.actions;

export default user.reducer;



