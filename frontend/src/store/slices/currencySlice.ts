// store/slices/currencySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrencyState {
  currency: string;
}

const initialState: CurrencyState = {
  currency: "",
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
