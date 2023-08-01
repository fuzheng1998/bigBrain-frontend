import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JoinPage from './pages/JoinPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <h1>Welcome to Big Brain</h1>,
      },
      {
        path: '/join',
        element: <JoinPage />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
