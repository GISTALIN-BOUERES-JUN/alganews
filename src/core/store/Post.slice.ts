import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../sdk/@types";

interface PostSliceState {
  paginated?: Post.Paginated;
}

