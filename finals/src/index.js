import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react'
import Reference from './pages/reference';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Issues from './pages/issues';
import Contact from './pages/contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path='/issues' element={<Issues />} />
          <Route path='/reference' element={<Reference />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
