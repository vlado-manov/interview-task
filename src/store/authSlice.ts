import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface UserData {
  email: string;
  password: string;
}
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData: UserData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://healthy7.baunit.com/user_signup",
        {
          email: userData.email,
          password: userData.password,
        }
      );

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      });
  },
});

export default authSlice.reducer;
