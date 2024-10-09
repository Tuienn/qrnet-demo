import { legacy_createStore as createStore, combineReducers } from "redux";
import dataReducer from "./reducers/dataReducer";
// import { Middleware } from "redux";
// import { RootReducer } from "./types";

const rootReducer = combineReducers({ dataReducer });

// const exampleMiddleware: Middleware<{}, RootReducer> =
//     (store) => (next) => (action) => {
//         console.log(store.getState());

//         next(action);
//     };

const store = createStore(rootReducer);

export default store;
