import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from "./serviceWorker";
import App from './App';
import { StateProvider } from './StateProvider';
import reducer ,{ initialState} from './reducer';


ReactDOM.render(
    <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
     <App/>
     </StateProvider>
     </React.StrictMode>,
     document.getElementById('root')
     );


     serviceWorker.unregister();