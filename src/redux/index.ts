import { createStore, compose, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import ApplicationState from "./types";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composer = compose(applyMiddleware(...middlewares));

const store: Store<ApplicationState> = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
