import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './business/Business.css';
import './list/list.css'
import './search/search.css'
import reportWebVitals from './reportWebVitals';
import BusinessList from './list/BusinessList';
import SearchBar from './search/SearchBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchBar />
    <BusinessList />
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
