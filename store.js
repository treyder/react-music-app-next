import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { saveState } from './localStorage';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
