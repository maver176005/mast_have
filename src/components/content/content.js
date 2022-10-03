import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { countSelector, fetchRecipes, productSelector, setPriceCount} from "../../redux/slices/productSlice";
import CardsView from "../cardView/cardsView";
import {ButtonGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Basket3} from "react-bootstrap-icons";
import MyModal from "../global/MyModal";


const Content = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const dispatch = useDispatch()
    const productList = useSelector(productSelector)
    const priceCount = useSelector(countSelector)

    useEffect(() => {
        dispatch(fetchRecipes())
    }, [dispatch])


    return (
        <>
            <div className={"d-flex justify-content-center mt-3"}>
                <ButtonGroup aria-label="Basic example" size={"sm"}>
                    <Button onClick={() => setModalShow(true)} variant="outline-danger">
                        <Basket3 size={20}/>
                    </Button>
                    <Button variant="outline-danger">{priceCount + " руб"}</Button>
                </ButtonGroup>
                <MyModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
            <div className={"d-flex flex-wrap"}>
                {productList && productList.map((pr) => (
                    <CardsView
                        key={pr.id}
                        title={pr.title}
                        description={pr.description}
                        price={pr.price}
                        image={pr.image}
                        addBusket={setPriceCount}
                        id={pr.id}
                    />
                ))}
                {/*{allProduct && JSON.stringify(productList)}*/}
            </div>
        </>

    );
}

export default Content;