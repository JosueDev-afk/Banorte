import App from "../../App";
import TarjetaCredito from "../TarjetaCredito/TarjetaCredito";
import React, { useState } from "react";
import './Formulario.css'
import banorteLogo from "../../Banorte-logo.jpg";
function Formulario() {
    const [mostrarHome, setHome] = useState(false);

    const handleClick = () => {
        setHome(!mostrarHome);
    };
    const handleClickInicio = () => {
        window.open(App,'_self');
    };
    return (
        <React.Fragment>

            {!mostrarHome &&
                <>
                    <div>
                        <header>
                            <div class="nav-principal">
                                <div class="nav-principal-menu">
                                    <i class="fa fa-navicon"></i>
                                </div>
                                <div class="nav-principal-banorte">
                                    <img onClick={handleClickInicio} src={banorteLogo} alt=""></img>
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
                        <head>
                            <title>Formulario de Datos Personales</title>
                        </head>
                        <body>
                            <button variant="primary" onClick={handleClick}>Regresar</button>
                            <form>

                                <h2>Datos Personales</h2>

                                <div class="form-group">
                                    <label for="curp">CURP:</label>
                                    <input type="text" id="curp" name="curp" required></input>
                                </div>

                                <div class="form-group">
                                    <label for="nombre">Nombre:</label>
                                    <input type="text" id="nombre" name="nombre" required></input>
                                </div>

                                <div class="form-group">
                                    <label for="apellido">Apellido:</label>
                                    <input type="text" id="apellido" name="apellido" required></input>
                                </div>

                                <div class="form-group">
                                    <label for="regimen_fiscal">Régimen Fiscal:</label>
                                    <select id="regimen_fiscal" name="regimen_fiscal" required>
                                        <option value="" disabled selected>Selecciona un régimen fiscal</option>
                                        <option value="Persona Física con Actividad Empresarial">Persona Física con Actividad Empresarial</option>
                                        <option value="Persona Física con Actividad Profesional">Persona Física con Actividad Profesional</option>
                                        <option value="Asalariado">Asalariado</option>
                                        <option value="Arrendamiento">Arrendamiento</option>
                                        <option value="Régimen de Incorporación Fiscal (RIF)">Régimen de Incorporación Fiscal (RIF)</option>
                                        <option value="Régimen de Pequeños Contribuyentes (REPECOS)">Régimen de Pequeños Contribuyentes (REPECOS)</option>
                                        <option value="Régimen de los ingresos por actividades agrícolas, ganaderas, silvícolas y pesqueras">Régimen de los ingresos por actividades agrícolas, ganaderas, silvícolas y pesqueras</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="fecha_nacimiento">Fecha de Nacimiento:</label>
                                    <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" required></input>
                                </div>

                                <div class="form-group">
                                    <label for="lugar_nacimiento">Lugar de Nacimiento:</label>
                                    <select id="lugar_nacimiento" name="lugar_nacimiento" required>
                                        <option value="" disabled selected>Selecciona un estado</option>
                                        <option value="Aguascalientes">Aguascalientes</option>
                                        <option value="Baja California">Baja California</option>
                                        <option value="Baja California Sur">Baja California Sur</option>
                                        <option value="Campeche">Campeche</option>
                                        <option value="Coahuila">Coahuila</option>
                                        <option value="Colima">Colima</option>
                                        <option value="Chiapas">Chiapas</option>
                                        <option value="Chihuahua">Chihuahua</option>
                                        <option value="Ciudad de México">Ciudad de México</option>
                                        <option value="Durango">Durango</option>
                                        <option value="Guanajuato">Guanajuato</option>
                                        <option value="Guerrero">Guerrero</option>
                                        <option value="Hidalgo">Hidalgo</option>
                                        <option value="Jalisco">Jalisco</option>
                                        <option value="Estado de México">Estado de México</option>
                                        <option value="Michoacán">Michoacán</option>
                                        <option value="Morelos">Morelos</option>
                                        <option value="Nayarit">Nayarit</option>
                                        <option value="Nuevo León">Nuevo León</option>
                                        <option value="Oaxaca">Oaxaca</option>
                                        <option value="Puebla">Puebla</option>
                                        <option value="Querétaro">Querétaro</option>
                                        <option value="Quintana Roo">Quintana Roo</option>
                                        <option value="San Luis Potosí">San Luis Potosí</option>
                                        <option value="Sinaloa">Sinaloa</option>
                                        <option value="Sonora">Sonora</option>
                                        <option value="Tabasco">Tabasco</option>
                                        <option value="Tamaulipas">Tamaulipas</option>
                                        <option value="Tlaxcala">Tlaxcala</option>
                                        <option value="Veracruz">Veracruz</option>
                                        <option value="Yucatán">Yucatán</option>
                                        <option value="Zacatecas">Zacatecas</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="genero">Género:</label>
                                    <select id="genero" name="genero" required>
                                        <option value="masculino">Masculino</option>
                                        <option value="femenino">Femenino</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="domicilio">Domicilio:</label>
                                    <input type="text" id="codigo_postal" name="codigo_postal" placeholder="Código Postal" required></input>
                                    <input type="text" id="calle" name="calle" placeholder="Calle" required></input>
                                    <input type="text" id="numero_interior" name="numero_interior" placeholder="Número Interior" required></input>
                                    <input type="text" id="estado" name="estado" placeholder="Estado" required></input>
                                </div>

                                <div class="form-group">
                                    <label for="correo">Correo Electrónico:</label>
                                    <input type="email" id="correo" name="correo" required></input>
                                </div>

                                <div class="form-group">
                                    <label for="telefono">Número de Teléfono:</label>
                                    <input type="text" id="telefono" name="telefono" required></input>
                                </div>

                                <div class="form-group">
                                    <label for="contrasena">Crea tu Contraseña:</label>
                                    <input type="password" id="contrasena" name="contrasena" required></input>
                                </div>

                                <div class="form-group">
                                    <label for="confirmar_contrasena">Confirma tu Contraseña:</label>
                                    <input type="password" id="confirmar_contrasena" name="confirmar_contrasena" required></input>
                                </div>

                                <button type="submit">Continuar</button>
                            </form>
                        </body>
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
                    </div>

                </>
            }
            {mostrarHome && <TarjetaCredito />}

        </React.Fragment >

    );
}

export default Formulario;