import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";

function ItemForm(props) {
  const [item, setValue] = useState("");
  const [count, setCount] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    if (!item || !count) return;
    props.addItem(item);
    props.addCount(parseInt(count));
    setValue("");
    setCount(1);
  };

  return (
    <Form onSubmit={handleSubmit} id="form">
      <Form.Row>
        <Col>
          <Form.Control
            as="select"
            id="formSelect"
            value={count}
            onChange={e => setCount(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="Item name"
            id="formEnter"
            value={item}
            onChange={e => setValue(e.target.value)}
          />
        </Col>
      </Form.Row>
    </Form>
  );
}

export default ItemForm;
