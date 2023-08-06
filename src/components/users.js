import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  currentUser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    setUser: (state, action) => {
      state.value.currentUser = action.payload;
    },

    clearUser: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
