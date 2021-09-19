import React, { useCallback, useState } from "react";
import { Container, Modal, Table } from "react-bootstrap";
import MapIframeMaps from "./map";
import { DateTime } from 'luxon'
import './card.css'


const EntregasCard = ( { entregas } ) => {

    const [selectedElement, setSelectedElement] = useState(null)

    const [show, setShow] = useState(false);

    const handleShow = useCallback (() => {
        setShow(!show)
    }, [show])
    
    const handleLineClick = useCallback(
        (e, element) => {
            e.preventDefault()
            setSelectedElement(element)
            handleShow()
        },[handleShow])



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

            {selectedElement && 
            
            <Modal show={show} fullscreen={true} onHide={handleShow}>
                <Modal.Header closeButton>
                <Modal.Title> Rota de navegação </Modal.Title>
                </Modal.Header>
                <Modal.Body>  
                    
                    <MapIframeMaps enderecos={selectedElement}  />

                </Modal.Body>
                </Modal>
            
            }
            
            
            {entregas.map( element => (
             
            <tr key={element.id} onClick={(e) => handleLineClick(e, element)}>
            
            <td> {element.nome_cliente} </td>
            <td> { DateTime.fromFormat(element.data_de_entrega, "yyyy-mm-dd").toLocaleString()   }  </td>
            <td> {element.ponto_de_partida}, {element.num_ponto_de_partida} </td>
            <td> {element.ponto_de_destino}, {element.num_ponto_de_destino} </td>
            </tr>

            

        ))}

        </tbody>
        </Table>

        </Container>




    )

}

export default EntregasCard