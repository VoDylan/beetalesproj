// import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Components/Header.tsx";
import Footer from "./Components/Footer.tsx";
import Home from "./routes/Home.tsx";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate,
} from "react-router-dom";

function App() {
    const router = createBrowserRouter([{
        path: "/",
        errorElement: <div/>,
        element: <Root/>,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            // {
            //     path: "/Map",
            //     element: <Map/>,
            // },
            // {
            //     path: "/Data",
            //     element: <Data/>,
            // },
            // {
            //     path: "/About",
            //     element: <About/>,
            // },
        ],
    },
    ]);

    return <RouterProvider router={router}/>;

    function Root() {
        const navigate = useNavigate();
        return (
            <>
                {/*<Header/>*/}

                {/*<Footer/>*/}
            </>
        )
    }

}

export default App
