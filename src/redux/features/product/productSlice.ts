import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCategory, TMeta } from "../../../types";

type TProduct = {
    _id: string;
    name: string;
    price: number;
    stock: "inStock" | "outStock";
    quantity: number;
    description: string;
    category: TCategory;
    images?: string[];
};

type TProducts = TProduct[];

type TProductsData = {
    meta: TMeta;
    products: TProducts;
};

const initialState: TProductsData = {
    meta: {
        page: 1,
        limit: 10,
        totalPage: 1,
        totalDoc: 0,
    },
    products: [],
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<TProductsData>) => {
            return action.payload;
        },
    },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
