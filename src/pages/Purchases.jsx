import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Purchases = () => {
    return (
        <div className="mt-5 mb-5 Purchases">
            <Card style={{ width: "30rem" }} className="p-5">
                <Card.Img
                    variant="top"
                    src="https://www.acomee.com.mx/images/gracias-compra.jpg"
                />
            </Card>
        </div>
    );
};

export default Purchases;