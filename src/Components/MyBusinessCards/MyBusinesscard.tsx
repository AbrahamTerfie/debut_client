import React from 'react'
import { Card, CardTitle, CardText, Button, CardBody, CardSubtitle, CardImg, CardImgOverlay, CardLink } from 'reactstrap'
import './MyBusinessCard.css'

export default function MyBusinesscard() {
    return (

        <Card className="my-business-card"  >

            <CardTitle tag="h5">
                Card title
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Card subtitle
            </CardSubtitle>
            <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>


        </Card>


    )
}
