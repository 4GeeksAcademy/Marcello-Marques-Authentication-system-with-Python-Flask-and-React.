import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Router, Link } from "@reach/router";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Private } from "./pages/private";
import { NotFound } from "./pages/notFound";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <Navbar />
            <Router>
                <Home path="/" />
                <Private path="/private" />
                <Login path="/login" />
                <Signup path="/signup" />
                <Demo path="/demo" />
                <Single path="/single/:theid" />
                <NotFound default />
            </Router>
    </div>
    );
};

export default injectContext(Layout);
