import './App.css';
import Header from "./Components/Header.tsx";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import MapPage from "./routes/MapPage.tsx";
import Conclusions from "./routes/Conclusions.tsx";
import Survey from "./routes/Suvery.tsx";
import WhatYouCanDo from "./routes/WhatYouCanDo.tsx";
import ScrollToTop from './Components/ScrollToTop.tsx'
import {
    createBrowserRouter,
    RouterProvider,

    Outlet
} from "react-router-dom";
import Footer from "./Components/Footer.tsx";
import BookletReport from "./routes/BookletReport.tsx";

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
                path: "/About",
                element: <About/>,
            },
            {
                path: "/Conclusions",
                element: <Conclusions/>,
            },
            {
                path: "/Research",
                element: <Survey/>,
            },
            {
                path: "/Guide",
                element: <WhatYouCanDo/>,
            },
            {
                path: "/Booklet",
                element: <BookletReport/>,
            },
        ],
    },
    ]);

    return <RouterProvider router={router}/>;

    function Root() {
        return (
            <div>
                <ScrollToTop />
                <Header/>
                <Outlet/>
                <Footer/>

            </div>
        )
    }

}

export default App
