import React, { useState } from "react";
import './App.css';
import TarjetaCredito from './components/TarjetaCredito/TarjetaCredito';
import logoBanorte from "./Banorte-logo.jpg";
import banortePortabilidad from "./01-Banorte-Portabilidad-Nomina.jpeg";
import banortePromo from "./Banorte-Promo-Seleccion-mayo2023-slider-VF.jpg";
import banorteTDC from "./Banorte-TDC-HotSale2023-slider.jpg";
import banorteTN from "./02-Banorte-Tarjetas-Nomina.jpg";

function App() {
  const [mostrarFormulario, setFormulario] = useState(false);

  const handleClick = () => {
    setFormulario(!mostrarFormulario);
  };


  return (

    <React.Fragment>
      <meta charset="UTF-8"></meta>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link rel="icon" href="./brujula.png"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
      <title>Banorte</title>


      <div>
        {!mostrarFormulario &&
          <>
            <body>
              <header>
                <div class="nav-principal">
                  <div class="nav-principal-menu">
                    <i class="fa fa-navicon"></i>
                  </div>
                  <div class="nav-principal-banorte">
                    <img src={logoBanorte} alt=""></img>
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
              <div class="slider-main">
                <div class="slider">
                  <ul>
                    <li><img src={banortePortabilidad} alt=""></img></li>
                    <li><img src={banortePromo} alt=""></img></li>
                    <li><img src={banorteTDC} alt=""></img></li>
                    <li><img src={banorteTN} alt=""></img></li>
                  </ul>
                </div>
              </div>
              <main>
                <div class="main-nav-2">
                  <div class="nav-2-bancolinea">
                    <h3>Banco en Línea</h3>
                    <form action="#">
                      <label for="usuario">Ingresa tu usuario</label>
                      <input id="usuario" type="text"></input>
                      <button>Entrar</button>
                    </form>
                    <div class="bancolinea-qr">
                      <p>Escanea tu codigo QR <i class="fa fa-qrcode"></i></p>
                    </div>
                    <div class="bancolinea-token">
                      <p>Sincroniza Token <i class="fa fa-key"></i></p>
                    </div>
                  </div>
                  <div class="nav-2-nav">
                    <ul>
                      <li>
                        <a onClick={handleClick}>
                          <p>Cuentas y Tarjetas</p>
                          <i class="fa fa-credit-card"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <p>Seguros</p>
                          <i class="fa fa-lock" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <p>Ahorro e Inversion</p>
                          <i class="fa fa-money" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <p>Creditos</p>
                          <i class="fa fa-calculator" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="nav-2-eslogan">
                    <p></p>
                  </div>
                </div>
                <div class="subtitle">Diseñamos soluciones de vida</div>
                <div class="main-adds">
                  <div class="main-adds-maneja">
                    <p>Maneja tu dinero integralmente</p>
                  </div>
                  <div class="main-adds-cambio">
                    <div class="add-cambio-title">
                      Tipo de Cambio
                    </div>
                    <div class="add-cambio-monedas">
                      <p></p>
                      <p class="p1">Compra</p>
                      <p class="p2">Venta</p>
                      <p class="p3">Dolar</p>
                      <p class="p4">16.50</p>
                      <p class="p5">19.90</p>
                      <p class="p6">Euros</p>
                      <p class="p7">18.35</p>
                      <p class="p8">19.5</p>
                    </div>
                    <div class="add-cambio-vermas">
                      <button>Ver mas</button>
                    </div>
                  </div>
                  <div class="main-adds-patrimonio">
                    <p>Construye tu patrimonio</p>
                  </div>
                </div>
                <div class="aprende-banorte">
                  <p>Aprende con Banorte</p>
                </div>
                <div class="post">
                  <div>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ywIE20AjBCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </div>
                  <div>
                    <iframe
                      width="100%" height="100%"
                      src="https://www.youtube.com/embed/dZVV5-czi7U"
                      title="YouTube Video Player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
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
            </body></>
        }
        {mostrarFormulario && <TarjetaCredito />}
      </div>
    </React.Fragment>
  );
}

export default App;
