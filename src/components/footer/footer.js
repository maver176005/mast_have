import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <Container
            fluid={true}
            style={{backgroundColor:"#F8F9FA",height:"150px"}}
            className={"d-flex justify-content-center align-items-center"}>
            <Row>
                <Col>
                    By MavicDev
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;