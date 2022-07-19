import { configureStore } from "@reduxjs/toolkit";
import userListSlice from "./userList";

const store = configureStore({
    reducer: {
        userLists: userListSlice
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;