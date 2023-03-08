import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

//the function input field renders a empty input field with default placeholder
//takes name and placeholder as props.
function InputField({
  name = "Input Field",
  placeholder = "This is a Placeholder",
}) {
  return (
    <div>
      <Container>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder={placeholder}
            aria-label={name}
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Container>
    </div>
  );
}

export default InputField;
