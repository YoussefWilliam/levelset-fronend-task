import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homePageReducer from "../components/Homepage/homepageSlice";
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
