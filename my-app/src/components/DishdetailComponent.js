import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardImg, CardBody, Media } from 'reactstrap';
import Moment from 'react-moment';
import 'moment-timezone';
 
class DishdetailComponent extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount(){
        console.log("Dishdetail component componentdidmount");
    }

    componentDidUpdate(){
        console.log("dishdetail component componentdidupdate");
    }

    renderComments(comments){
        if(comments != null){

            
            const a = comments.map(element => {
                const moment = require('moment');
                const b  = moment(element.date)
                return (    
                    <Media as="li">
                        <Media body>
                            <p> {element.comment} </p>
                            <p> --{element.author}, {b.format('ll')} </p>
                        </Media>
                    </Media>
                )
            });
            return a;
        }   
        else{
            return (
                <div></div>
            );
        }     
    }

    render() {
        if (this.props.dish != null){
            return (
                <div className="container">
                    <div className="row">         
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <ul className="list-unstyled">
                                {this.renderComments(this.props.dish.comments)}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }
}
export default DishdetailComponent;