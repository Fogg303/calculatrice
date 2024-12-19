import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérification des mots de passe
        if (password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas.');
            return;
        }

        // Simulation de l'envoi des données
        const userData = {
            Nom_Utilisateur: nom,
            Email_Utilisateur: email,
            Mot_de_passe_Utilisateur: password,
            Role_Utilisateur: 'utilisateur', // Rôle par défaut
        };

        // Remplacez ceci par votre appel API ou requête à votre backend
        console.log('Utilisateur enregistré avec succès :', userData);
        alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
    };

    return (
        <Container fluid className="vh-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(to right, #2C3E50, #4CA1AF)' }}>
            <Row className="w-100 justify-content-center">
                <Col md={6} lg={4} className="p-4">
                    <div className="shadow rounded p-5" style={{ backgroundColor: '#FFFFFF' }}>
                        <h2 className="text-center" style={{ color: '#0097A7', fontWeight: 'bold', marginBottom: '1.5rem' }}>Inscrivez-vous</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Entrez votre nom"
                                    value={nom}
                                    onChange={(e) => setNom(e.target.value)}
                                    required
                                    className="py-2 px-3 rounded-pill"
                                    style={{ borderColor: '#0097A7', backgroundColor: '#FFFFFF', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Adresse email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="py-2 px-3 rounded-pill"
                                    style={{ borderColor: '#0097A7', backgroundColor: '#FFFFFF', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="password"
                                    placeholder="Mot de passe"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="py-2 px-3 rounded-pill"
                                    style={{ borderColor: '#0097A7', backgroundColor: '#FFFFFF', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="password"
                                    placeholder="Confirmez votre mot de passe"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    className="py-2 px-3 rounded-pill"
                                    style={{ borderColor: '#0097A7', backgroundColor: '#FFFFFF', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                className="w-100 py-2 rounded-pill fw-bold"
                                style={{ backgroundColor: '#0097A7', border: 'none', color: '#FFFFFF' }}
                            >
                                S'inscrire
                            </Button>
                        </Form>
                        <div className="text-center mt-3">
                            <p style={{ color: '#616161' }}>
                                Vous avez déjà un compte ?{' '}
                                <a href="/login" style={{ color: '#0097A7', textDecoration: 'none' }}>
                                    Connectez-vous
                                </a>
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
