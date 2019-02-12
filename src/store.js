import { applyMiddleware, createStore, compose } from 'redux';
import { reducers } from './reducers';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' 

export function configureStore(initialState, ...middlewares) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // const persistConfig = {
  //   key: 'root',
  //   storage: storage,
  //   whitelist: ['navigation'] 
  // }

  // const persistedReducer = persistReducer(persistConfig, reducers)

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );


  // let persistor = persistStore(store)
  
  //return { store, persistor };
  return store;
}
