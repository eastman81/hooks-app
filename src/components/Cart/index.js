import React from "react";
import { Row, Col, Button } from "react-bootstrap";

function Cart(props) {
  const itemCount =
    props.count[props.index].number > 1
      ? props.count[props.index].number
      : "";

  return (
    <Row className="itemList">
      <Col
        id="itemInfo"
        sm={9}
        style={{ textDecoration: props.item.isInCart && "line-through" }}
      >
        {`${itemCount} ${props.item.text}`}
      </Col>

      <Col className="text-right" id="itemButtons" sm={3}>
        <Button
          id="slashButton"
          variant="secondary"
          size="sm"
          style={{ marginRight: "4px" }}
          onClick={() => props.editItem(props.index)}
        >
          {props.item.isInCart ? "Re-Add" : "Cross Off"}
        </Button>
        <Button
          id="removeButton"
          variant="danger"
          size="sm"
          onClick={() => props.removeItem(props.index)}
        >
          x
        </Button>
      </Col>
    </Row>
  );
}

export default Cart;
