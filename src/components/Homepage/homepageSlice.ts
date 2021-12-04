import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../redux-store/store";
import { Cat } from "../../constants/interfaces";
import { cats_records } from "../../constants/catsRecords";

export interface CatsState {
  data: Array<Cat>;
}

const initialState: CatsState = {
  data: cats_records,
};

export const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    updateCat: (state, action) => {
      let id = action?.payload?.id;
      state.data[id] = action.payload;
    },
    deleteCat: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
    incrementNumberOfViews: (state, action) => {
      let id = action?.payload?.id;
      state.data[id].viewCount += 1;
    },
  },
});

export const { updateCat, deleteCat, incrementNumberOfViews } =
  homepageSlice.actions;

export const selectCats = (state: RootState | any) => state.homePage.data;

const homePageReducer = homepageSlice.reducer;

export default homePageReducer;
