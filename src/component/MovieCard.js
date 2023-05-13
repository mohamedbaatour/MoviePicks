import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ marginTop: "60px" }}>
      {
        <Card
          className="cardex"
          style={{
            width: "19em",
            margin: "30px",
            border: "solid white 3px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #00000030",
          }}
        >
          <Card.Img className="cardimage" src={movie.image} alt="pic" />

          <div className="bodybg"></div>
          <Card.Body className="cardbody">
            <Card.Title
              style={{
                height: "25px",
                width: "auto",
                overflowY: "auto",
                fontWeight: "bold",
              }}
            >
              {movie.name}
            </Card.Title>
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
            <Card.Text
              style={{
                width: "255px",
                height: "100px",
                textAlign: "start",
                overflow: "auto",
                fontSize: "0.9rem",
                opacity: 0.75,
              }}
            >
              {movie.description}
            </Card.Text>
          </Card.Body>
        </Card>
      }
    </div>
  );
};
export default MovieCard;
