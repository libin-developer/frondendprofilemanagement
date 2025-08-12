import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProfileList from './pages/ProfileList.jsx';
import ProfileDetails from './pages/ProfileDetails.jsx';


const router = createBrowserRouter([
  { path: "/", element: <ProfileList /> },
  { path: "/profile/:id", element: <ProfileDetails /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
