import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers/list';
import objectListReducer from '../reducers/objectList';
import optionsReducer from '../reducers/options';

export default () => {
    const store = createStore(
        combineReducers({
            list: listReducer,
            objectList: objectListReducer,
            options: optionsReducer
        })
    );

    return store;
};