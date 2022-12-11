import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'post/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://dummyjson.com/posts');
            return response.data.posts;
        } catch {
            return thunkAPI.rejectWithValue('Some Error')
        }
    }
)

