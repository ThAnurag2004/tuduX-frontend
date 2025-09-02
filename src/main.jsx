import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Dashboard, Login, SignUp, TodoForm, Landing} from './pages/index.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Landing />} />
      <Route path='/dashboard' element={<Dashboard/>}  />
      <Route path='/login' element={<Login />}  />
      <Route path='/signup' element={<SignUp />}  />
      <Route path='/todoform' element={<TodoForm />}  />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
