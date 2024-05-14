import React from 'react'

const Reserva = (props) => {
    const obtenerNombre = (valor) => {
        props.setNombre(valor);
    }
    const obtenerEmail = (valor) => {
        props.setEmail(valor);
    }
    const obtenerFecha = (valor) => {
        props.setFecha(valor);
    };

    return (
        <form onSubmit={props.docRef}>
            <input type="text" onChange={(e) => obtenerNombre(e.target.value)} />
            <input type="email" onChange={(e) => obtenerEmail(e.target.value)} />
            <input type="date" onChange={(e) => obtenerFecha(e.target.value)} />

            <button type="submit">Enviar</button>
        </form>
    );
}

export default Reserva;