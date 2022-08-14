import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App';
import reportWebVitals from './utils/reportWebVitals';
import register from './utils/swLoader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you don't want to use service worker,
// delete public/sw.js, utils/swLoader.js and the register() call below
// Learn more about service workers: https://cra.link/PWA
register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
