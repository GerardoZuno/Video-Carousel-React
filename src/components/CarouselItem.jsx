import React from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import PlayIcon from "../assets/img/play-icon.png";
import PlusIcon from "../assets/img/plus-icon.png";
import RemoveIcon from "../assets/img/remove-icon.png";

const CarouselItem = (props) => {
   const  {id, cover, title, year, contentRating, duration, isList} = props;
   const handleSetFavorite = () => {
     props.setFavorite(
       {
        id, cover, title, year, contentRating, duration
       }
     )
   } 
   const handleDeleteFavorite = (itemId) => {
      props.deleteFavorite(itemId)
   }  
    return (
    <div className="carousel-item">
      <img
        className="carousel-item__img"
        src={cover}
        alt={title}
      />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={PlayIcon}
              alt="Play icon"
            />
          </Link> 
          

          {
            isList ?
            <img
            className="carousel-item__details--img"
            src={RemoveIcon}
            alt="Remove icon"
            onClick={() => handleDeleteFavorite(id)}
            />
            :
            <img
            className="carousel-item__details--img"
            src={PlusIcon}
            alt="Plus icon"
            onClick={() => handleSetFavorite(id)}
          />
                  
          }
          

        </div>
  <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{year} {contentRating} {duration} minutos</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
}

const mapDispatchToProps = {
     setFavorite,
     deleteFavorite 
}

export default connect(null, mapDispatchToProps)(CarouselItem)
