import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserStateType = {
  users: User[];
};

const initialState: UserStateType = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const { loadUser } = userSlice.actions;
export default userSlice.reducer;
