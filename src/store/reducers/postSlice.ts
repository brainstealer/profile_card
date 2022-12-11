import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPosts } from "../../modules/IPosts";
import { fetchPosts } from "./ActionCreator";

interface PostState {
    posts: IPosts[];
    isLoading: boolean;
    error: string;
}

const initialState: PostState = {
    posts: [],
    isLoading: false,
    error: '',
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPosts[]>) => {
            state.isLoading = false;
            state.error = '';
            state.posts = action.payload;
        },
        [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default postSlice.reducer;