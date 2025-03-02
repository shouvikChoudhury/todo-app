import { configureStore } from "@reduxjs/toolkit";
import reduxReducer from "./reduxToolkit";

const configStore = configureStore({
    reducer: reduxReducer,
});

export default configStore;