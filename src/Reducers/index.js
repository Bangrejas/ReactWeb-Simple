import { combineReducers } from 'redux';

// import all reducer
// import RootNavigator from '../../navigators/RootNavigator';
import authReducer from './authReducer';
import NewsReducer from "./newsReducer";

const reducers = combineReducers({
    auth: authReducer,
    chara: NewsReducer
});

export default reducers;