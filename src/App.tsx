// import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Components/Header.tsx";
// import Footer from "./Components/Footer.tsx";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
// import Map from "./routes/Map.tsx"
import Database from "./routes/Database.tsx";
import {
    createBrowserRouter,
    RouterProvider,

    Outlet
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
            {
                path: "/Database",
                element: <Database/>,
            },
            {
                path: "/About",
                element: <About/>,
            },
        ],
    },
    ]);

    return <RouterProvider router={router}/>;

    function Root() {
        return (
            <div>
                <Header/>

                {/*<Footer/>*/}
                <Outlet/>
            </div>
        )
    }

}

export default App
