import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'; // Importation de Grid de Bootstrap
import NavbarComponent from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './pages/Signup';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => setIsAuthenticated(true);
    const handleLogout = () => setIsAuthenticated(false);

    return (
        <Router>
            <NavbarComponent onLogout={handleLogout} />

            {/* Utilisation du Grid Layout */}
            <Container fluid>
                <Row>
                    <Col md={3} className="bg-light p-3">
                        <Sidebar />
                    </Col>
                    <Col md={9} className="p-3">
                        <Routes>
                            <Route 
                                path="/" 
                                element={isAuthenticated ? <Dashboard /> : <Login onLogin={handleLogin} />} 
                            />
                            <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
};

export default App;
