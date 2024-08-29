import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppProvider } from './AppContext'; 
import GenerateCertificate from './pages/GenerateCertificate.jsx'
import MainLayout from './Layouts/mainLayout.jsx'
import PreviewCertificate from './pages/PreviewCertificate.jsx'
import Home from './pages/Home.jsx'
import DataStore from './components/DataStore.jsx'
import { ToastContainer } from 'react-toastify'


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home/>
      </MainLayout>
    ),
  },
  {
    path: "/generate",
    element: (
      <MainLayout>
        <GenerateCertificate />
      </MainLayout>
    ),
  },
  {
    path:"/previewCertificate",
    element:(
      <MainLayout>
 <PreviewCertificate/>
      </MainLayout>
       
      
    )
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider> 
    <DataStore/>
    <RouterProvider router={router}/>
    <ToastContainer/>
    </AppProvider>
  </StrictMode>,
)
