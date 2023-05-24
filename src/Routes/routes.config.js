import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import About from "../Pages/About/About"
import { Blogs } from "../Pages/Blogs/Blogs"
import ErrorPage from "../Pages/ErrorPage"
import { Home } from "../Pages/Home"
import { Products } from "../Pages/Products/Products"
import { Login } from "../Pages/login/Login"
import Signup from "../Pages/signup/Signup"
import Subscribe from "../Pages/Subscribe/Subscribe"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            
        ],

    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path:"/subscribe",
        element:<Subscribe/>
    },
    {
        path: '/dashboard',
        // element: <><DashboardLayout></DashboardLayout></>,
        children: [
            // {
            //     path: '',
            //     element: <Welcome />,

            // },
            // {
            //     path: 'my-bookings',
            //     element: <PrivateRoute><MyBookings /></PrivateRoute>,

            // },

        ]
    },
])

export default router