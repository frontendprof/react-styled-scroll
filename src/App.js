import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";



import "./App.css";





function App() {
    return (
        <Router>
            <Navbar to="/" />
        </Router>
    )
}

export default App
