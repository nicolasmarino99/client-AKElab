import React, { useContext } from 'react';
import { MoviesContext } from '../../contextProviders/MoviesProvider';
import "./Card.scss";

const Card = ({title, img, description, rating, genre, date}) => {
    const [state, dispatch] = useContext(MoviesContext);
    return (

    <div className="Card">
        <h1>{title}</h1>
        <div className="content-container">
            <div className="image-container">
                <img src={`https://image.tmdb.org/t/p/w200/${img}`} alt={title}/>
            </div>
            <div className="info-container">
                <p className="description">{description}</p>
                <div className="gnr-info">
                    <p><b>Titulo</b>: {title}</p>
                    <p><b>Calificacion</b>: {rating}</p>
                    <p><b>Genero</b>: {genre.map(category => <p>{category}</p>)}</p>
                    <p><b>Fecha de realizacion</b>: {date.toDateString()}</p>
                </div>
            </div>
        </div>
    </div>
)};


export default Card;
