import React from 'react';

const Card = ({title, img, description, rating, genre, date}) => (

    <div className="Card">
        <h1>{title}</h1>
        <div className="content-container">
            <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title}/>
            <div>
                <p className="description">{description}</p>
                <div>
                    <p>Titulo: {title}</p>
                    <p>Calificacion: {rating}</p>
                    <p>Genero: {genre}</p>
                    <p>Fecha de realizacion: {date}</p>
                </div>
            </div>
        </div>
    </div>
);


export default Card;
