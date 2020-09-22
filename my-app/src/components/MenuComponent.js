import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, CardImgOverlay } from 'reactstrap';

class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
  }

  onSelectDish(dish){
    this.setState({
      selectedDish: dish
    });
  }

  renderDish(dish){
    if (dish != null){
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
          <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    else{
      return (
        <div></div>
      );
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
        return (
          <div key={dish.id} onClick={() => this.onSelectDish(dish)} className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardImgOverlay> 
                  <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
                <p>{dish.description}</p>
              </CardBody>
            </Card>
          </div>
        );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          {this.renderDish(this.state.selectedDish)}
        </div>
      </div>
    );
  }

}
  
  export default MenuComponent;
  