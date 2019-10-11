import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import App from './App'
import './sass/main.sass'
import * as serviceWorker from './serviceWorker';
import history from './lib/history'


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ReactDOM.render(
		<Router history={history}>
			<App />
		</Router>,
	document.getElementById('emailbuilder-root')
)

serviceWorker.unregister();

