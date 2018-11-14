// import { createStore } from 'redux';
import { createStore, applyMiddleware } from '../redux/redux';
import { counter } from './demo.redux';
import thunk from '../redux/redux-thunk';

const store = createStore(counter, applyMiddleware(thunk));
console.log(store.getState());

store.subscribe(function () {
    console.log(2);
})

export default store;
