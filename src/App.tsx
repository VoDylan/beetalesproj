// import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Components/Header.tsx";
// import Footer from "./Components/Footer.tsx";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Database from "./routes/Database.tsx";
import MapPage from "./routes/MapPage.tsx";
import Conclusions from "./routes/Conclusions.tsx";
import Survey from "./routes/Suvery.tsx";
import {
    createBrowserRouter,
    RouterProvider,

    Outlet
} from "react-router-dom";
import Footer from "./Components/Footer.tsx";

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
            {
                path: "/MapPage",
                element: <MapPage/>,
            },
            {
                path: "/Database",
                element: <Database/>,
            },
            {
                path: "/About",
                element: <About/>,
            },
            {
                path: "/Conclusions",
                element: <Conclusions/>,
            },
            {
                path: "/Survey",
                element: <Survey/>,
            },
        ],
    },
    ]);

    return <RouterProvider router={router}/>;

    function Root() {
        return (
            <div>
                <Header/>
                <Outlet/>
                <Footer/>

            </div>
        )
    }

}

export default App
