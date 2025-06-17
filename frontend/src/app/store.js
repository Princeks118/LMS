
import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/authSlics.js";
import { rootReducer } from "./rootReducer.js";
import { authApi } from "../features/api/authapi.js";
export const appStore=configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authApi.middleware),
});