import {combineReducers} from "redux";
import { LikeReducer } from "./Like-reducer";
import { CommentsReducer } from "./Comments-reducer";

export const rootReducer = combineReducers({
    LikeReducer,
    CommentsReducer
})