import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import App from "../../App";
import Formulario from '../Formulario/Formulario'
import './TarjetaCredito.css';
import banorteLogo from "../../Banorte-logo.jpg";
import creditoRemove from "./credito-removebg-preview.png";
import nominaRemove from "./nomina-removebg-preview.png";
import banortecRemove from "./banortec-removebg-preview.png";
import mujerRemove from "./mujer-removebg-preview.png";
import cuarenta from "./40.jpg";

function TarjetaCredito() {
    const [mostrarTarjeta, setTarjeta] = useState(false);
    const handleClickTarjeta = () => {
        setTarjeta(!mostrarTarjeta);
    };
    const handleClick = () => {
        window.open(App,'_self');
    };

    return (

        <React.Fragment>

            {!mostrarTarjeta  &&
                <>
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8"></meta>
                            <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                            <link rel="icon" href="./brujula.png"></link>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <link rel="stylesheet" href="cuentas.css"></link>
                            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
                            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                            <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
                            <title>Banorte</title>
                        </head>
                        <body>
                            <header>
                                <div class="nav-principal">
                                    <div class="nav-principal-menu">
                                        <i class="fa fa-navicon"></i>
                                    </div>
                                    <div class="nav-principal-banorte">
                                    
                                        <img onClick={handleClick} src={banorteLogo} alt=""></img>
                                    
                                        
                                    </div>
                                    <div class="nav-principal-buscador">
                                        <div class="buscador">
                                            <i class="fa fa-search"></i>
                                        </div>
                                        <div class="location icon">
                                            <span class="glyphicon">&#xe062;</span>
                                        </div>
                                        <div class="disability icon">
                                            <i class="fa fa-wheelchair"></i>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <main>
                                <div class="cuentas">
                                    <div class="credito">
                                        <h2>Tarjetas de Crédito</h2>
                                        <p>La libertad de comprar lo que necesitas en tus manos</p>
                                        <button>Ver más</button>
                                        <img src={creditoRemove} alt=""></img>
                                    </div>
                                    <div class="digital">
                                        <h2>Tarjeta Digital</h2>
                                        <p>Abre tu cuenta en 5 minutos, sin saldo y sin membresía</p>
                                        <button variant="primary" onClick={handleClickTarjeta}>Ver más</button>
                                    </div>
                                    <div class="nomina">
                                        <h2>Tarjeta de Nómina</h2>
                                        <img src={nominaRemove} alt=""></img>
                                        <p>Tú decides dónde recibir lo que tanto esfuerzo te toma: tu sueldo</p>
                                        <ul>
                                            <li>Beneficio</li>
                                            <li>Créditos</li>
                                            <li>Promociones</li>
                                        </ul>
                                        <button>Ver más</button>
                                    </div>
                                    <div class="pro">
                                        <h2>BanorTec</h2>
                                        <img src={banortecRemove} alt=""></img>
                                        <button>Ver más</button>
                                    </div>
                                    <div class="mujer">
                                        <h2>Mujer Banorte</h2>
                                        <img src={mujerRemove} alt=""></img>
                                        <p>Respaldamos tu fuerza creadora en cada etapa de tu vida</p>
                                        <button>Ver más</button>
                                    </div>
                                    <div class="cuarenta">
                                        <h2>Tarjeta 40</h2>
                                        <p>Para ti que todo con música es mejor</p>
                                        <button>Ver más</button>
                                        <img src={cuarenta} alt=""></img>
                                    </div>
                                </div>
                            </main>
                            <footer>
                                <div class="footer-container">
                                    <div class="footer-column">
                                        <h3>Redes sociales</h3>
                                        <ul>
                                            <li><a href="#">Facebook</a></li>
                                            <li><a href="#">Twitter</a></li>
                                            <li><a href="#">Instagram</a></li>
                                        </ul>
                                    </div>
                                    <div class="footer-column">
                                        <h3>Preguntas frecuentes</h3>
                                        <ul>
                                            <li><a href="#">¿Cómo puedo hacer una apertura?</a></li>
                                            <li><a href="#">¿Cuál es la política apertura de cuenta?</a></li>
                                            <li><a href="#">¿Cómo puedo realizar una transferencia?</a></li>
                                        </ul>
                                    </div>
                                    <div class="footer-column">
                                        <h3>Cuentas</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit mauris eu diam lobortis, sed lobortis nulla vestibulum. Quisque ultrices blandit commodo. Ut suscipit, metus at elementum luctus, enim mi pulvinar leo, non eleifend nisl ipsum eget metus. Nulla id ex mi.</p>
                                    </div>
                                    <div class="footer-column">
                                        <h3>Terminos legales</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit mauris eu diam lobortis, sed lobortis nulla vestibulum. Quisque ultrices blandit commodo. Ut suscipit, metus at elementum luctus, enim mi pulvinar leo, non eleifend nisl ipsum eget metus. Nulla id ex mi.</p>
                                    </div>
                                </div>
                            </footer>
                        </body>
                    </html>

                </>
            }
            {mostrarTarjeta && <Formulario /> }

        </React.Fragment >
    );
}

export default TarjetaCredito;