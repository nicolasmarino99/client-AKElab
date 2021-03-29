import React, { useContext } from 'react';
import { MoviesContext } from '../../contextProviders/MoviesProvider';

const Card = ({title, img, description, rating, genre, date}) => {
    const [state, dispatch] = useContext(MoviesContext);
    return (

    <div className="Card">
        <h1>{title}</h1>
        <div className="content-container">
            <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title}/>
            <div>
                <p className="description">{description}</p>
                <div>
                    <p>Titulo: {title}</p>
                    <p>Calificacion: {rating}</p>
                    <p>Genero: {genre.map(category => <p>{state.movies.genres.filter(x => x.id === category.id).name}</p>)}</p>
                    <p>Fecha de realizacion: {date.toDateString()}</p>
                </div>
            </div>
        </div>
    </div>
)};


export default Card;
