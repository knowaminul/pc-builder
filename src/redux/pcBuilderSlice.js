// slices/pcBuilderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedComponents: {
    "CPU / Processor": null,
    Motherboard: null,
    RAM: null,
    "Power Supply Unit": null,
    "Storage Device": null,
    Monitor: null,
  },
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      const { category, component } = action.payload;
      state.selectedComponents[category] = component;
    },
    clearPCBuilder: (state) => {
      state.selectedComponents = {
        "CPU / Processor": null,
        Motherboard: null,
        RAM: null,
        "Power Supply Unit": null,
        "Storage Device": null,
        Monitor: null,
      };
    },
    clearComponent: (state, action) => {
      const category = action.payload;
      state.selectedComponents[category] = null;
    },
  },
});

export const { addComponent, setLoading, clearComponent } =
  pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
