import React from "react";
import { Card } from "react-bootstrap";


const Footer = () => {
    return (
        <div>
            <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">Desarrollado por Ulises Urbina Maldonado</h5>
                    <p className="card-text">Contacto: ulisesurbinam@gmail.com</p>
                    <p className="card-text">55 5436 9655</p>
                    <Card.Link href="https://www.linkedin.com/in/ulises-urbina-maldonado-5a8433242/"><i className="fa-brands fa-linkedin-in"></i> Ulises Urbina</Card.Link>
                    <Card.Link href="https://github.com/ulisesurbina"><i class="fa-brands fa-github"></i> Ulises Urbina</Card.Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
