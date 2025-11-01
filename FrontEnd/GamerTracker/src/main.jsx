import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import IndexPage from './IndexPage.jsx';


//Enrutamiento de las paginas
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/index', element: <IndexPage /> }, 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
