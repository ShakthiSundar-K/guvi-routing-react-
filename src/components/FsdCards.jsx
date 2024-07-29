import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FsdCards({ data }) {
  return (
    <div className='container'>
      <div className='row'>
        {data.map((item, index) => (
          <div key={index} className='col-12 col-md-4 mb-4'>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant='top'
                src={item.img}
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
                <Button variant='secondary'>Read More</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FsdCards;
