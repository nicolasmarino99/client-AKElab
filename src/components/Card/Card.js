import React, { useContext } from 'react';
import starY from "../../assets/imgs/StarY.png";
import starG from "../../assets/imgs/StarG.png";
import { ratingStars } from '../../customLogic/customLogic';
import "./Card.scss";

const Card = ({title, img, description, rating, genre, date}) => {
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
                    <div>
                        <b>Calificacion</b>:
                        <p>{rating}</p>
                        <div className="stars-container">
                            {ratingStars(rating, starY, starG).map(
                                (img, i) => <img src={img} alt={i} key={i}/>
                            )}
                        </div>
                    </div>
                    <div><b>Genero</b>: {genre.map((category, i) => <p key={i}>{category}, </p>)}</div>
                    <p><b>Fecha de realizacion</b>: {date.toDateString()}</p>
                </div>
            </div>
        </div>
    </div>
)};


export default Card;
