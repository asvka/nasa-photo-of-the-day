import React from "react";
import { Card, CardText, CardBody, CardTitle, CardImg, CardHeader} from "reactstrap";

const PhotoCard = props => {
    return (
        <Card>
            <CardBody className="card-body">
                <CardTitle>{props.title}</CardTitle>
                <CardHeader>{props.date}</CardHeader>
                <CardImg>{props.hdurl}</CardImg>
                <CardText>{props.explanation}</CardText>
            </CardBody>
        </Card>
    );
};
export default PhotoCard;