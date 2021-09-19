import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form'

const formEntrega = () => {



    return (
    

    <Container>

        <h1> Preencha suas entregas </h1>

        <Form>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="NomeCliente">
                    <Form.Label>Nome do cliente</Form.Label>
                    <Form.Control type="text" placeholder="Nome do cliente" />
                    </Form.Group>
                </Col>

                <Col lg="4" md="4">
                    <Form.Group className="mb-3" controlId="DataDeEntrega">
                    <Form.Label>Data de Entrega</Form.Label>
                    <Form.Control type="date" placeholder="Insira a data de entrega" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="PontoDePartida">
                    <Form.Label>Insira o ponto de partida</Form.Label>
                    <Form.Control type="text" placeholder="Insira o ponto de partida" />
                    </Form.Group>
                </Col>
                <Col lg="4" md="4">
                    <Form.Group className="mb-3" controlId="nPontoDePartida">
                    <Form.Label>Insira numero do ponto de partida</Form.Label>
                    <Form.Control type="text" placeholder="Insira numero do ponto de partida" />
                    </Form.Group>
                </Col>

            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="PontoDeDestino">
                    <Form.Label>Insira o ponto de destino</Form.Label>
                    <Form.Control type="text" placeholder="Insira o ponto de destino" />
                    </Form.Group>
                </Col>

                <Col lg="4" md="4">
                    <Form.Group className="mb-3" controlId="nPontoDeDestino">
                    <Form.Label>Insira numero do ponto de destino</Form.Label>
                    <Form.Control type="text" placeholder="Insira numero do ponto de destino" />
                    </Form.Group>
                </Col>
            </Row>
            
        </Form>
    </Container>
    )

}

export default formEntrega