import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import productService from "./productService";
// import { ProductType, ProductsType } from "@/app/types/Product.type";
import { ProductType, ProductsType } from "@/app/types/Product.type";

const initialState = {
  products: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// Get products
export const getProducts = createAsyncThunk(
  "student/getProducts",
  async (_, thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state: ProductsType) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state: ProductsType) => {
        state.isLoading = true;
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<ProductType[] | any>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.products = action.payload;
        }
      )
      .addCase(
        getProducts.rejected,
        (state: ProductsType, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }
      );
    // .addCase(createStudent.pending, (state: StudentsType) => {
    //   state.isLoading = true;
    // })
    // .addCase(
    //   createStudent.fulfilled,
    //   (state: StudentsType, action: PayloadAction<any>) => {
    //     state.isLoading = false;
    //     state.isSuccess = true;
    //     state.products.push(action.payload);
    //   }
    // )
    // .addCase(
    //   createStudent.rejected,
    //   (state: StudentsType, action: PayloadAction<any>) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.message = action.payload;
    //   }
    // );
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
