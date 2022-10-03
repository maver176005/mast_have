import React from 'react';
import {Button, Container} from "react-bootstrap";

const FilterPanel = () => {
    return (
        <Container style={{
            // backgroundColor:"red",
            maxWidth: "750px",
            height:"40px",
            marginTop: "10px",
            display:"flex",
            width:"80%",
            justifyContent:"space-between",
            alignItems:"space-between",

        }}>
            <Button size={"sm"} variant="outline-primary">для лица</Button>{' '}
            <Button size={"sm"} variant="outline-primary">для тела</Button>{' '}
            <Button size={"sm"} variant="outline-primary">средства для ухода</Button>{' '}
            <Button size={"sm"} variant="outline-primary">органические средства</Button>{' '}
            <Button size={"sm"} variant="outline-primary">патчи</Button>{' '}
        </Container>
    );
};

export default FilterPanel;