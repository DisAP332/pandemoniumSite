import { configureStore } from "@reduxjs/toolkit";
import sectionTogglerReducer from "./reduxSlices/sectionTogglerSlice";
import dataSliceReducer from "./reduxSlices/dataSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    section_toggler: sectionTogglerReducer,
    site_data: dataSliceReducer,
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
