import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import './form.css'

const initialValue = {
    nome_cliente: "",
    data_de_entrega: "",
    ponto_de_partida: "",
    num_ponto_de_partida: 0,
    ponto_de_destino: "",
    num_ponto_de_destino: 0
}

const FormEntrega = () => {

  
    const [values, setValues] = useState(initialValue);
 

    function onChange (env) {
        const { name, value } = env.target

        setValues({...values, [name]: value})


    }

    function onSubmit (env) {
        env.preventDefault()

        axios.post('http://localhost:8000/v1/entregas/', values)


    }




    return (
    

    <Container className="styledContainer">

        <h1> Preencha suas entregas </h1>

        <Form onSubmit={onSubmit}>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="NomeCliente">
                    <Form.Label>Nome do cliente</Form.Label>
                    <Form.Control type="text" placeholder="Nome do cliente" 
                    onChange={onChange} name="nome_cliente" />
                    </Form.Group>
                </Col>

                <Col lg="4" md="4">
                    <Form.Group className="mb-3" controlId="DataDeEntrega">
                    <Form.Label>Data de Entrega</Form.Label>
                    <Form.Control type="date" placeholder="Insira a data de entrega" 
                    onChange={onChange} name="data_de_entrega" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="PontoDePartida">
                    <Form.Label> Ponto de partida</Form.Label>
                    <Form.Control type="text" placeholder="Ponto de partida" 
                    onChange={onChange} name="ponto_de_partida"/>
                    </Form.Group>
                </Col>
                <Col lg="4" md="4">
                    <Form.Group className="mb-3" controlId="nPontoDePartida">
                    <Form.Label> Numero do ponto de partida</Form.Label>
                    <Form.Control type="text" placeholder=" Numero do ponto de partida" 
                    onChange={onChange} name="num_ponto_de_partida" />
                    </Form.Group>
                </Col>

            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="PontoDeDestino">
                    <Form.Label> Ponto de destino</Form.Label>
                    <Form.Control type="text" placeholder=" Ponto de destino" 
                    onChange={onChange} name="ponto_de_destino" />
                    </Form.Group>
                </Col>

                <Col lg="4" md="4">
                    <Form.Group className="mb-3" controlId="nPontoDeDestino">
                    <Form.Label> Numero do ponto de destino</Form.Label>
                    <Form.Control type="text" placeholder="Numero do ponto de destino" 
                    onChange={onChange} name="num_ponto_de_destino" />
                    </Form.Group>
                </Col>
            </Row>
            < Button type="submit" variant="outline-primary">Enviar</Button>
        </Form>

    </Container>
    )

}

export default FormEntrega