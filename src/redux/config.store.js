import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    
});

export const store = createStore(
    rootReducer,
    WINDOW._REDUX_DEVTOOLS_EXTENTION__ &&
    WINDOW._REDUX_DEVTOOLS_EXTENTION__()
)