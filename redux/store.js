import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user";
import {persistReducer, persistStore} from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import categories from "./reducers/categories";
import donationItems from "./reducers/donationItems";

const rootReducer = combineReducers({
    user : user,
    categories : categories,
    donationItems : donationItems,
});

const configuration = {
    key : 'root',
    storage : AsyncStorage,
    version : 1
}

const persistedReducer = persistReducer(configuration, rootReducer);



const store = configureStore({
    reducer : persistedReducer,
    middleware : getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck : false,
        });
    },
});




export default store;
export const persistor = persistStore(store);
persistor.purge();