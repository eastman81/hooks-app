import React, { useState } from "react";
import ItemForm from "./components/Form";
import Cart from "./components/Cart";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import "./style.css";

function App() {
  const [items, setItems] = useState([
    {
      text: "Milk",
      isInCart: false
    },
    {
      text: "Eggs",
      isInCart: false
    }
  ]);

  const [count, setCount] = useState([
    {
      number: 1
    },
    {
      number: 12
    }
  ]);

  const addItem = text => {
    const newItems = [...items, { text, isInCart: false }];
    setItems(newItems);
  };

  const addCount = number => {
    const newCount = [...count, { number }];
    setCount(newCount);
  };

  const editItem = index => {
    const newItems = [...items];
    items[index].isInCart === false
      ? (newItems[index].isInCart = true)
      : (newItems[index].isInCart = false);
    setItems(newItems);
  };

  const removeItem = index => {
    const newItems = [...items];
    const newCount = [...count];
    newItems.splice(index, 1);
    newCount.splice(index, 1);
    setItems(newItems);
    setCount(newCount);
  };

  return (
    <Container className="app">
      <Jumbotron>
        <h2>Shopping Cart</h2>

        {items.map((item, index) => (
          <Cart
            key={index}
            index={index}
            item={item}
            count={count}
            editItem={editItem}
            removeItem={removeItem}
          />
        ))}

        <Row>
          <Col>
            <ItemForm addItem={addItem} addCount={addCount} />
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default App;
