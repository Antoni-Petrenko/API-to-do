import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';

//If you want to use ReduxDevTools import compose from redux----
//                                                              |
//                                                              V
// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;
// const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

const store=createStore(reducer,applyMiddleware(thunk));
const app=(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app,document.getElementById('root'))