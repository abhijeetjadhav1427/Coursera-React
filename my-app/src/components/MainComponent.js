import React, { Component } from 'react';
import MenuComponent from './MenuComponent';
import DishdetailComponent from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import HeaderComponent from './HederComponent';
import FooterComponent from './FooterComponent';
import HomeComponent from './HomeComponent';
import ContactComponent from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

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
    const Homepage = () => {
      return (
        <HomeComponent />
      )
    }
     return (
      <div>
        <HeaderComponent />
          <Switch>
            <Route path="/home" component={Homepage} />
            <Route path="/menu" component={() => <MenuComponent dishes={this.state.dishes}/>} />
            <Route path="/contactus" component={() => <ContactComponent />} />
            <Redirect to="/home" />
          </Switch>
        <FooterComponent />
      </div>
    );
  }
}

export default MainComponent;
