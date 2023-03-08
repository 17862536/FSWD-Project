import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

//function displays a bootstrap card with header.
//takes 3 Props, header, title, and desc
//header - Displays the title in the Header Section
//title - displays the Title in the body Section
//desc - Displays the card Description.
function CardWithHeader({
  header = "Default Header",
  title = "Default Title",
  desc = "This is a Default Description",
}) {
  return (
    <div>
      <Container className="my-3 w-2">
        <Card>
          <Card.Header>{header}</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default CardWithHeader;
