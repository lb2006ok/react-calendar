import Reducer from '../Reducer/Reducer';
import {createStore} from 'react';

export default () => {
    const store  = createStore(Reducer);
    return store;
}