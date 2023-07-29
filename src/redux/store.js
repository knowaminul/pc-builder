import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./pcBuilderSlice"; // Update the import statement
import { apiSlice } from "./api/api";
import userReducer from "./user/userSlice";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    pcBuilder: pcBuilderReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
