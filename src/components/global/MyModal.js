import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Table} from "react-bootstrap";
import {Dash, Plus} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {countSelector} from "../../redux/slices/productSlice";

function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch()
    const priceCount = useSelector(countSelector)

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Дмитрий
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Ваша корзина</h4>
                <Table striped borderless>
                    <thead>
                    <tr>
                        <th>Артикул</th>
                        <th>Бренд</th>
                        <th>Кол-вл</th>
                        <th>Цена</th>
                        <th>{""}</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>0021</td>
                        <td>Ladore</td>
                        <td>12 шт.</td>
                        <td>549 руб.</td>
                        <tr>{<>
                            <Plus/>
                            <Dash/>
                        </>}</tr>
                    </tr>
                    <tr>
                        <td>0432</td>
                        <td>Jacob</td>
                        <td>1 шт.</td>
                        <td>234 руб.</td>
                    </tr>
                    <tr>
                        <td>0312</td>
                        <td>Mi cosmetics</td>
                        <td>4 шт.</td>
                        <td>156 руб.</td>
                    </tr>
                    </tbody>
                </Table>
                {`К оплате: ${priceCount} руб`}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Закрыть</Button>
                <Button>Оформить заказ</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal
