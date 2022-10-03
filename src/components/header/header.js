import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import Button from "react-bootstrap/Button";
import {Basket3} from 'react-bootstrap-icons';
import {ButtonGroup, Form, Image} from "react-bootstrap";
import MyModal from "../global/MyModal";


function Header() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Container fluid={true} className={"me-2"}>
                <Navbar expand="xxl" variant="light" bg="light">
                    <Container>
                        <Image
                            width={60}
                            height={60}
                            alt="171x180"
                            src="assets/logo.png"
                        />
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-danger">Search</Button>
                        </Form>


                    </Container>
                </Navbar>
            </Container>
        </>
    );
}

export default Header;