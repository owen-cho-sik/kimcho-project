import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import MainComponent from './MainComponent';
import DashboardComponent from './DashboardComponent';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

class TopMenuComponent extends Component {
    render() {
        return (
            <Router>
                <Navbar bg="dark" variant="dark" className="mb-4">
                    <Navbar.Brand>
                        <NavLink exact to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <NavLink to="/main" style={{ color: 'white', textDecoration: 'none' }}>Main</NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <NavLink to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</NavLink>
                    </Navbar.Brand>
                </Navbar>

                <Routes>
                    <Route path="/" element={<div>Welcome</div>} />
                    <Route path="/main" element={<MainComponent />} />
                    <Route path="/dashboard" element={<DashboardComponent />} />
                    <Route path="*" element={<div>Not found</div>} />
                </Routes>
            </Router>
        );
    }
}

export default TopMenuComponent;