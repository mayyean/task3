import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:8000/posts";
const FAVORITES_API = "http://localhost:8000/favorites";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  let res = await axios.get(API);
  return res.data;
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (newPostObj, { dispatch }) => {
    await axios.post(API, newPostObj);
    dispatch(getPosts());
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    favorites: [],
    onePost: null,
    loading: false,
    error: null,
  },
  reducers: {
    cleanOnePost: (state, action) => {
      state.onePost = null;
    },
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [getPosts.rejected]: (state, action) => {
      state.error = action.error.name;
      state.loading = false;
    },
  },
});

export const { cleanOnePost } = postsSlice.actions;
export default postsSlice.reducer;
