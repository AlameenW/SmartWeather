import Card from "react-bootstrap/Card";

const SummaryItems = (props) => {
  return (
    <div className="container nav-container">
      <Card
        style={{ width: "12rem" }}
        className="d-flex flex-column justify-content-center align-items-center text-center-center"
      >
        <Card.Title>{props.location}</Card.Title>
      </Card>
      <Card
        style={{ width: "12rem" }}
        className="d-flex flex-column justify-content-center align-items-center text-center-center"
      >
        <Card.Title>{props.duration}</Card.Title>
      </Card>
      <Card
        style={{ width: "12rem" }}
        className="d-flex flex-column justify-content-center align-items-center text-center-center"
      >
        <Card.Title>Coordinates</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          LONG:{props.coordinates[0]}, LAT:{props.coordinates[1]}
        </Card.Subtitle>
      </Card>
    </div>
  );
};

export default SummaryItems;
