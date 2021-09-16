import { createStore, combineReducers, applyMiddleware } from 'redux';
import history from '@/routes/history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({
  router: connectRouter(history),
});

const middleware: any = [routerMiddleware(history)];
if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger();

  middleware.push(loggerMiddleware);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export type StoreType = ReturnType<typeof rootReducer>;

export default store;
