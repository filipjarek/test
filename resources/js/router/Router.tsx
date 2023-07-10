import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexChannel from '../pages/Index/Index'
import CreateChannel from '../pages/CreateChannel/CreateChannel'
import Footer from '../components/Footer';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <IndexChannel /> } />
                <Route path="/channel/create" element={ <CreateChannel /> } />
            </Routes>
            <Footer />
        </div>
    )
}

export default Router