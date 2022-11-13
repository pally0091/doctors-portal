
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Appointment from './Components/Appointment/Appointment';
import Home from './Components/Home/Home';
import Main from './Components/Main';
import Reviews from './Components/Reviews/Reviews';
import Contact from './Components/Contact/Contact';
import Login from './Components/User/Login';
import Register from './Components/User/Register'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element : <Home></Home>
        },
        {
          path:'/home',
          element: <Home></Home>
        },
        {
          path:'/about',
          element: <About></About>
        },
        {
          path: '/appointment',
          element: <Appointment></Appointment>
        },
        {
          path: '/reviews',
          element: <Reviews></Reviews>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path : '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
