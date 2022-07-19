import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

//THis type from the fetch API(randomuser.me/api)
type IUser = {
    name: {
        first: string;
        last: string
    }
    location: { country: string }
    picture: { large: string }
    id: {
        value: string;
    }
}


type InitialState = {
    userList: IUser[]
    loading: boolean
    error: string | null
}


//async fetching of the data like:name,location,picture,id
export const fetchUsers = createAsyncThunk('user/fetchUsers',
    async () => {

        const response = await axios.get('https://randomuser.me/api/');
        const data = await response.data.results;
        return data;

    })



//initial state for use in the reducer
const initialState: InitialState = {
    userList: [],
    loading: false,
    error: null
}


//crate the slice
const userListSlice = createSlice({
    name: "userLists",
    initialState,
    reducers: {},
    extraReducers: {
        //if the data compeleted successfully
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.userList = action.payload;
            state.loading = false;
        },
        //if the data pending
        [fetchUsers.pending.type]: (state) => {
            state.loading = true;


        },
        //if the data failed
        [fetchUsers.rejected.type]: (state, action) => {
            state.error = action.payload || 'somethings is wrong';
            state.loading = false;
        }
    }
})

export default userListSlice.reducer;