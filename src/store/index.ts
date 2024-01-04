import { configureStore } from "@reduxjs/toolkit";
import { accessApi } from "../domains/access/services/access/accessSlice";
import { productApi } from "../domains/catalog/products/services/product/productSlice";
import { ikonkaProductApi } from "../domains/catalog/products/services/ikonkaProduct/ikonkaProductSlice";
import { categoryApi } from "../domains/catalog/categories/services/category/categorySlice";
import userReducer from "../shared/services/user/userSlice";
import productsReducer from "../shared/services/products/productsSlice";
import providerProductsReducer from "../shared/services/providerProducts/providerProductsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { createFilter } from "redux-persist-transform-filter";

const saveUserLoginSubsetFilter = createFilter("userSlice", [
  "accessToken",
  "refreshToken",
  "name",
  "surname",
]);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
  transforms: [saveUserLoginSubsetFilter],
};

const reducers = combineReducers({
  accessApi: accessApi.reducer,
  productApi: productApi.reducer,
  ikonkaProductApi: ikonkaProductApi.reducer,
  categoryApi: categoryApi.reducer,
  user: userReducer,
  products: productsReducer,
  providerProducts: providerProductsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      accessApi.middleware,
      productApi.middleware,
      ikonkaProductApi.middleware,
      categoryApi.middleware,
    ]),
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
