import React from 'react';
import { Col } from 'react-bootstrap';

function Item(props){
    return(
      <Col md={4}>
        <img alt={props.shoes.title} src={process.env.PUBLIC_URL + "/shoes"+props.ix+".jpg"} width="80%"/>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Col>
    )
  }

export default Item