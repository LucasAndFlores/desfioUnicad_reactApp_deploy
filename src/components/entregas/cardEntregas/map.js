import React from 'react';


const MapIframeMaps = ( { enderecos } ) => {

    const concatpontoDeDestino = enderecos.ponto_de_destino.replaceAll(' ', "+")

    const juntoDestino = concatpontoDeDestino.concat("+",enderecos.num_ponto_de_destino)
    console.log(juntoDestino)

    const concatpontoDePartida = enderecos.ponto_de_partida.replaceAll(' ', "+")
    // console.log(concatpontoDePartida)
    
    const juntoPartida = concatpontoDePartida.concat("+",enderecos.num_ponto_de_partida)
    console.log(juntoPartida)



    const linkApiGoogle = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyCEDIXzpV_bSBNlha5d6dtmY7BGAww08Mo"

    const linkMontado = linkApiGoogle.concat("&origin=",juntoPartida,"&destination=",juntoDestino,"&avoid=tolls|highways")

    console.log(linkMontado)




    return (

        <iframe
        width={450}
        height={250}
        frameborder={0}
        src={linkMontado} allowfullscreen>
        </iframe>
    )
}
export default MapIframeMaps