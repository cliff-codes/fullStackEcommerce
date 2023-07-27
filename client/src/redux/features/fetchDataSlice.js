import { fetchFeaturedProducts } from "../functions/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    loading: false,
    error: null,
}

export const featuredProducts = createAsyncThunk('api/featuredProducts', async() => {
    const response = await fetchFeaturedProducts()
    return response
})

const apiSlice = createSlice({
    name: "featuredSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(featuredProducts.pending, (state) => {
                state.loading = true
                state.error = null
            })

        builder.addCase(featuredProducts.fulfilled, (state, action) => {
                state.loading = false,
                state.data = action.payload
            })

        builder.addCase(featuredProducts.rejected, (state, action) => {
                state.loading = false,
                state.error = action.error.message
            })
    }
})

export default apiSlice.reducer