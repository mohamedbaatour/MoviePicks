// react components
import { default as NavBootstrap } from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import ReactStars from "react-rating-stars-component";
// local components
import Add from "../add/add";

const Nav = ({
  nameSearch,
  setNameSearch,
  rateSearch,
  setRateSearch,
  movies,
  setMovies,
}) => {
  const ratingChanged = (event) => {
    setRateSearch(event);
  };
  const refreshPage = () => {
    window.location.reload();
  };
  const handleChange = (event) => {
    setNameSearch(event.target.value);
  };
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{ color: "white", fontSize: "35px" }}>
          🍿MoviePicks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "lightgrey",
              fontSize: "0.9rem",
              marginRight: "0.5rem",
            }}
          >
            Filter By
          </span>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={20}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            value={rateSearch}
          />
          <Button
            variant="outline-secondary"
            style={{ marginLeft: "1rem" }}
            onClick={refreshPage}
            size="sm"
          >
            Reset
          </Button>
        </div>

        <Navbar id="navbarScroll">
          <NavBootstrap
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></NavBootstrap>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
              value={nameSearch}
            />
          </Form>
        </Navbar>

        <Add movies={movies} setMovies={setMovies} />
      </Container>
    </Navbar>
  );
};

export default Nav;
