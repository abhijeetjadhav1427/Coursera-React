import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, CardImgOverlay } from 'reactstrap';

function RenderMenuItems({ dish, onClick }){
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardImgOverlay> 
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
        <p>{dish.description}</p>
      </CardBody>
    </Card>
  );
}

const MenuComponent = (props) =>{
  const menu = props.dishes.map((dish) => {
        return (
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <RenderMenuItems dish={dish}  onClick={props.onClick} />
          </div>
        );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
      </div>
    );
}
    
 
export default MenuComponent;  