import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardImg, CardBody, Media } from 'reactstrap';
import Moment from 'react-moment';
import 'moment-timezone';

function RenderComments({comments}){
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

function RenderDish({dish}){
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

const DishdetailComponent = (props) => {
     if (props.dish != null){
        return (
            <div className="container">
                <div className="row">         
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            <RenderComments comments={props.dish.comments} />
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
       
        
export default DishdetailComponent;