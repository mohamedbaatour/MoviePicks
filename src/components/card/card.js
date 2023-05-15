import React from "react";
import { Card as CardBootstrap } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./card.css";

const Card = ({ movie }) => {
  return (
    <div style={{ marginTop: "60px" }}>
      {
        <CardBootstrap
          className="cardex"
          style={{
            width: "19em",
            margin: "30px",
            border: "solid white 3px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #00000030",
          }}
        >
          <CardBootstrap.Img className="cardimage" src={movie.image} alt="pic" />

          <div className="bodybg"></div>
          <CardBootstrap.Body className="cardbody">
            <CardBootstrap.Title
              style={{
                height: "25px",
                width: "auto",
                fontWeight: "bold",
              }}
            >
              {movie.name}
            </CardBootstrap.Title>
            <ReactStars
              count={5}
              size={20}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
              value={movie.rating}
              edit={false}
            />
            <CardBootstrap.Text
              style={{
                width: "255px",
                height: "100px",
                textAlign: "start",
                overflow: "auto",
                fontSize: "0.85rem",
                marginTop: "0.5rem",
                lineHeight: "1.25rem",
                opacity: 0.75,
              }}
            >
              {movie.description}
            </CardBootstrap.Text>
          </CardBootstrap.Body>
        </CardBootstrap>
      }
    </div>
  );
};
export default Card;
