import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userReducer from "../slice/userSlice";
// import roleReducer from "../slice/roleSlice";
// import breedReducer from "../slice/breedSlice";
// import vaccineReducer from "../slice/vaccineSlice";
// import colorReducer from "../slice/colorSlice";
// import designationReducer from "../slice/designationSlice";
// import supplierReducer from "../slice/supplierSlice";
// import doctorReducer from "../slice/doctorSlice";
// import customerReducer from "../slice/customerSlice";
// import siteReducer from "../slice/siteSlice";
// import unitReducer from "../slice/unitSlice";
// import ItemReducer from "../slice/itemSlice";
// import StallReducer from "../slice/stallSlice";
// import AnimalCatgReducer from "../slice/animalCatgSlice";
// import tagReducer from "../slice/tagSlice";
// import animalReducer from "../slice/animalSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}


const rootReducer = combineReducers({

    // userslc: userReducer, //userslc comes from name (userSlice.js)
    // roleslc: roleReducer,
    // breedslc: breedReducer,
    // vaccineslc: vaccineReducer,
    // colorslc: colorReducer,
    // designationslc: designationReducer,
    // supplierslc: supplierReducer,
    // doctorslc: doctorReducer,
    // customerslc: customerReducer,
    // siteslc: siteReducer,
    // unitslc: unitReducer,
    // itemslc: ItemReducer,
    // stallslc: StallReducer,
    // animalcatgslc: AnimalCatgReducer,
    // tagslc: tagReducer,
    // animalslc: animalReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

