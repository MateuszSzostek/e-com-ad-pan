import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../domains/catalog/products/features/counter/counterSlice";
import { accessApi } from "../domains/access/services/access/accessSlice";
import userReducer from "../shared/services/user/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  accessApi: accessApi.reducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware().concat(accessApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accessApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

//@ts-ignore
persistor.subscribe((event) => {
  if (event === "persistor-error") {
    console.error("Error during rehydration or persisting");
  }
});
