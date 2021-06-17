import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApis } from 'apis';
import { StorageKeys } from 'constants/index';
import { localStorageService } from 'hooks/useLocalStorage';

export const registerAsyncAction = createAsyncThunk('user/register', async (user, thunkAPI) => {
  // thunkAPI dùng để dispatch 1 action khác
  try {
    const response = await authApis.register(user);
    if (response) {
      localStorageService.setAccessToken(response.jwt);
      localStorageService.setCurrentUser(response.user);
    }
    return response.user;
  } catch (error) {
    return error.response.data.msg;
  }
});

export const loginAsyncAction = createAsyncThunk('user/login', async (user, thunkAPI) => {
  // thunkAPI dùng để dispatch 1 action khác
  try {
    const response = await authApis.login(user);
    if (response) {
      localStorageService.setAccessToken(response.jwt);
      localStorageService.setCurrentUser(response.user);
    }
    return response.user;
  } catch (error) {
    return error.response.data.msg;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    error: null,
  },
  reducers: {
    logout(state) {
      // clear localStorage
      localStorageService.clearTokens();
      state.current = {};
    },
  },
  extraReducers: {
    // gồm các action type tự define
    [registerAsyncAction.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [registerAsyncAction.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [loginAsyncAction.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [loginAsyncAction.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
