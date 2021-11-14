import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Rules from './Rules';

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Routes>
				<Route path="/" element={<WelcomePage />} />
				<Route path="/App" element={<App />} />
				<Route path="/Rules" element={<Rules />} />
			</Routes>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
