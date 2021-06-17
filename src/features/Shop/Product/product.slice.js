import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productApis } from 'apis';

export const getProductAsyncAction = createAsyncThunk('product/getProduct', async (filters, thunkAPI) => {
  try {
    //const convertFilters = { ...filters, sort: filters.sort.value };
    const response = await productApis.getProducts(filters);
    return {
      data: response.data,
      pagination: response.pagination,
    };
  } catch (error) {
    return error.response.data.msg;
  }
});

// Define 1 slice là sẽ vừa có reducer vừa có action
const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    products: null,
    pagination: null,
    loading: true,
    error: null,
  },
  reducers: {
    getProductListSuccess: (state, action) => {
      state.products = action.payload.data;
      state.pagination = action.payload.pagination;
    },
  },
  extraReducers: {
    [getProductAsyncAction.fulfilled]: (state, action) => {
      state.products = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    [getProductAsyncAction.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

const { actions, reducer } = ProductSlice;
export const { getProductListSuccess } = actions;
export default reducer;
