import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserState, IActionByKey } from "./userSlice.types";

const initialState: IUserState = {
  accessToken: "",
  refreshToken: "",
  name: "",
  surname: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUserState>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
    },
    setUserFieldByKey: (state, action: PayloadAction<IActionByKey>) => {
      state[action.payload.key] = action.payload.value;
    },
    clearUserFieldByKey: (state, action: PayloadAction<IActionByKey>) => {
      state[action.payload.key] = "";
    },
  },
});

export const { setUserData, setUserFieldByKey, clearUserFieldByKey } =
  userSlice.actions;

export default userSlice.reducer;
