import './App.css';
import Header from "./Components/Header.tsx";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Database from "./routes/Database.tsx";
import MapPage from "./routes/MapPage.tsx";
import Conclusions from "./routes/Conclusions.tsx";
import Survey from "./routes/Suvery.tsx";
import WhatYouCanDo from "./routes/WhatYouCanDo.tsx";
import {
    createBrowserRouter,
    RouterProvider,

    Outlet
} from "react-router-dom";
import Footer from "./Components/Footer.tsx";


// import beeCursor from './assets/bee_cursor_icon.png';

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
            // {
            //     path: "/Database",
            //     element: <Database/>,
            // },
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
            {
                path: "/WhatYouCanDo",
                element: <WhatYouCanDo/>,
            },
        ],
    },
    ]);

    return <RouterProvider router={router}/>;

    function Root() {
        return (
            <div
                // style={{ cursor: `url(${beeCursor}), auto` }}
                >
                <Header/>
                <Outlet/>
                <Footer/>

            </div>
        )
    }

}

export default App
