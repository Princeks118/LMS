import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../features/authSlics.js";
import { authApi } from "../features/api/authapi.js";

export const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
});
