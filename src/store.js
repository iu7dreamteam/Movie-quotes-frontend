import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducer from './reducers';

const initialState = {
};

export default function configureStore() {
    const middlewares = [thunk, logger];

    const middlewareEnhancer = applyMiddleware(...middlewares);

    return createStore(
        reducer,
        initialState,
        composeWithDevTools(middlewareEnhancer),
    );
}
