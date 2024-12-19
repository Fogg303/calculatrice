import React from 'react';
import { Container, Row, Col, Card, Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaHome, FaClipboardList, FaUserAlt, FaSignOutAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = ({ onLogout }) => {
    return (
        <div>
            {/* Navbar */}
            <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold">PROJET CMS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown title="Compte" id="basic-nav-dropdown" align="end">
                                <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={onLogout}>Déconnexion</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Main Container */}
            <Container fluid className="mt-4">
                <Row>
                    <Col md={3} className="bg-light p-3 vh-100 sticky-top">
                        {/* Sidebar */}
                        <h4 className="fw-bold mb-4">Menu</h4>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="#home" className="mb-2 text-dark fw-semibold"><FaHome className="me-2" /> Accueil</Nav.Link>
                            <Nav.Link href="#features" className="mb-2 text-dark fw-semibold"><FaClipboardList className="me-2" /> Tendances</Nav.Link>
                            <Nav.Link href="#categories" className="mb-2 text-dark fw-semibold"><FaClipboardList className="me-2" /> Catégories</Nav.Link>
                            <Nav.Link href="#profiles" className="mb-2 text-dark fw-semibold"><FaUserAlt className="me-2" /> Profils</Nav.Link>
                            <Nav.Link onClick={onLogout} className="text-dark fw-semibold"><FaSignOutAlt className="me-2" /> Déconnexion</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={9}>
                        {/* Main Content */}
                        <h2 className="fw-bold mb-3">Bienvenue sur votre Dashboard</h2>
                        <Row>
                            <Col md={4}>
                                <Card className="mb-4">
                                    <Card.Body>
                                        <Card.Title>Statistiques</Card.Title>
                                        <Card.Text>
                                            Aperçu des données récentes de la plateforme.
                                        </Card.Text>
                                        <Button variant="primary" className="w-100">Voir plus</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mb-4">
                                    <Card.Body>
                                        <Card.Title>Gestion des utilisateurs</Card.Title>
                                        <Card.Text>
                                            Consultez et gérez les utilisateurs de la plateforme.
                                        </Card.Text>
                                        <Button variant="primary" className="w-100">Voir plus</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mb-4">
                                    <Card.Body>
                                        <Card.Title>Demandes en attente</Card.Title>
                                        <Card.Text>
                                            Consultez les demandes en attente pour une action rapide.
                                        </Card.Text>
                                        <Button variant="primary" className="w-100">Voir plus</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;
