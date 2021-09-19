import React from "react";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table'

const EntregasCard = ( { entrega } ) => {
    




    return (


        <Container>
        <h2> Lista de entregas </h2>
        
        <Table striped bordered hover >
                <thead>
                    <tr>
                        <th> Nome do cliente </th>
                        <th> Data de entrega </th>
                        <th> Ponto de partida </th>
                        <th> Ponto de chegada </th>
                    </tr>
                </thead>
            <tbody>
            {entrega.map( element => (
           

            <tr>
            <td> {element.nome_cliente} </td>
            <td> {element.data_de_entrega}  </td>
            <td> {element.ponto_de_partida},{element.num_ponto_de_partida} </td>
            <td> {element.ponto_de_destino},{element.num_ponto_de_partida} </td>
            </tr>
            

        ))}

        </tbody>
        </Table>
        </Container>




    )

}

export default EntregasCard