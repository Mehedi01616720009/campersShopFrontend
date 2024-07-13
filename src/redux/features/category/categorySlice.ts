import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCategory, TMeta } from "../../../types";

type TCategories = TCategory[];

type TCategoriesData = {
    meta: TMeta;
    categories: TCategories;
};

const initialState: TCategoriesData = {
    meta: {
        page: 1,
        limit: 10,
        totalPage: 1,
        totalDoc: 0,
    },
    categories: [],
};

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<TCategoriesData>) => {
            return action.payload;
        },
    },
});

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;
