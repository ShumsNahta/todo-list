import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Button, InputGroup, FormControl, ListGroup } from "react-bootstrap";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  function handleUserInput(e) {
    setUserInput(e.target.value)
  }

  function addItem() {
    if (userInput.trim() != "") {
      const newItem = {
        id: Math.random(),
        value: userInput.trim()
      }

      setList([...list, newItem]);
      setUserInput("");
    }
  }

  function deleteItem(key) {
    const updatedList = list.filter((item) => item.id !== key)
    setList(updatedList)
  }

  function editItem(index) {
    const editedTodo = prompt("Edit the todo")
    if (editedTodo !== null && editedTodo !== "") {
      const updatedTodos = [...list]
      updatedTodos[index].value = editedTodo.trim()
      setList(updatedTodos)
    }
  }

  return (
    <Container>
      <Row
        className="text-primary"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          fontWeight: "bolder"
        }}
      >
        TODO LIST
      </Row>
      <hr />
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="add item . . ."
              size="lg"
              value={userInput}
              aria-label="add something"
              aria-describedby="basic-addon2"
              onChange={(e) => handleUserInput(e)}
            />
            <InputGroup>
              <Button className="mt-2 text-white bg-primary" onClick={addItem}>
                ADD
              </Button>
            </InputGroup>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            {list?.map((item, index) => (
              <div key={index} className="pt-2">
                <ListGroup.Item
                  variant="dark"
                  action
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderRadius:"10px"
                  }}
                >
                  {item.value}
                  <span>
                    <Button
                      className="text-primary"
                      style={{ marginRight: "10px" }}
                      variant="light"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => editItem(index)}
                      variant="light"
                      className="text-primary"
                    >
                      Edit
                    </Button>
                  </span>
                </ListGroup.Item>
              </div>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default App;