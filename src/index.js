import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppHeader from './Branding/appHeader';
import AppFooter from './Branding/appFooter';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Routing = () => {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route exact path="/" element={<App/>} />
      </Routes>
      <AppFooter />
    </Router>
  )
}

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Routing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
