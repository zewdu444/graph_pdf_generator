import { configureStore } from "@reduxjs/toolkit";
import ArrestSlice from "./arrest/ArrestSlice";

export default configureStore({
  reducer: {
    arrest: ArrestSlice,
  },
});
