import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import MenuComponent from './MenuComponent';
import DishdetailComponent from './DishdetailComponent';
import {DISHES} from '../shared/dishes';

class MainComponent extends Component {

  constructor(props){
    super(props);
    this.state={
      dishes: DISHES,
      selectedDish: null
    };
  }

  onSelectDish(dishId){
    this.setState({
      selectedDish: dishId
    });
  }

  render(){
     return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent dishes={this.state.dishes} onClick={(dishId) => this.onSelectDish(dishId)} />
        <DishdetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
 
}

export default MainComponent;
