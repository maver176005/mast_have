import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col, Row} from "react-bootstrap";
import MoreInfoCard from "../popover/popover";
import { setPriceCount} from "../../redux/slices/productSlice";
import {useDispatch} from "react-redux";

function CardsView({title, description, price, image, id}) {
    const dispatch = useDispatch()
    return (
        <Card style={{
            width: '15rem',
            margin: "15px",
            justifyContent: "center",
            alignItems: "center"
        }}
              border={"info"}>
            <Card.Img
                style={{
                    marginTop: "10px",
                    width: "50%",
                    height: "50%",
                }}
                variant="top"
                src={image}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <MoreInfoCard
                        description={description}
                        title={title}
                    />
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row style={{margin: "unset", padding: "unset"}}>
                    <Col>
                        <Button
                            id={id}
                            variant="outline-primary"
                            size={"sm"}
                            onClick={() => dispatch(setPriceCount(price))}
                        >
                            В корзину
                        </Button>
                    </Col>
                    <Col style={{color: "red"}}>
                        {`${price} руб`}
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
}

export default CardsView;
