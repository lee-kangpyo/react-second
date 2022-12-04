import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item(props){
    
    const id = props.shoes.id;
    console.log(id);
    if(props.ix < 8){
      return(
        <Col md={4}>
          <Link to={"detail/"+id}>
            <img alt={props.shoes.title} src={process.env.PUBLIC_URL + "/shoes"+props.ix+".jpg"} width="80%"/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
          </Link>
        </Col>
        
      )
    }else{
      return null;
    }
  }

export default Item