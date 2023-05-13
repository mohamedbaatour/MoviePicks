import React, { useState } from "react";
import {
  InputGroup,
  Button,
  Modal,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import "./AddMovie.css";

const AddMovie = ({ movies, setMovies }) => {
  const [show, setShow] = useState(false);
  const [newTitle, setNewTitle] = useState(false);
  const [newRate, setNewRate] = useState(false);
  const [newPoster, setNewPoster] = useState(false);
  const [newDescription, setNewDescription] = useState(false);

  const addNewMovie = () => {
    let newMovie = {
      id: Math.random(),
      name: newTitle,
      image: newPoster,
      rating: newRate,
      description: newDescription,
    };
    setMovies([...movies, newMovie]);
    handleClose();
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <div class="add">
      <Button variant="outline-light" onClick={handleShow}>
        Add A New Movie!
      </Button>

      <Modal show={show} onHide={handleClose} scrollable={true}>
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>New movie</Modal.Title>
        </Modal.Header>

        <Modal.Body className="popup" scrollable={true}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">
              Enter Movie Title
            </InputGroup.Text>
            <Form.Control
              placeholder="Movie Title"
              aria-label="Movie Title"
              aria-describedby="basic-addon2"
              onChange={(event) => setNewTitle(event.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">
              Enter Movie Rating
            </InputGroup.Text>
            <Form.Control
              placeholder="Movie Rating"
              aria-label="Movie Rating"
              aria-describedby="basic-addon2"
              onChange={(event) => setNewRate(event.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">
              Enter Movie PosterURL
            </InputGroup.Text>
            <Form.Control
              placeholder="Poster URL"
              aria-label="Poster URL"
              aria-describedby="basic-addon2"
              onChange={(event) => setNewPoster(event.target.value)}
            />
          </InputGroup>

          <FloatingLabel
            controlId="floatingTextarea2"
            label="Movie Description"
          >
            <Form.Control
              as="textarea"
              placeholder="Enter Movie Description"
              style={{ height: "100px" }}
              onChange={(event) => setNewDescription(event.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={() => addNewMovie()}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default AddMovie;
