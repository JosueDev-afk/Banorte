import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import App from "../../App";
function TarjetaCredito() {
    const [mostrarTarjeta, setTarjeta] = useState(false);

    const handleClickTarjeta=()=>{
        setTarjeta(!mostrarTarjeta);
      };

      return (
        <div>
        
            <React.Fragment>
            
              {!mostrarTarjeta && 
                <>
                
                <h1>Banorte</h1>
                <Button variant="primary" onClick={handleClickTarjeta}>Regresar</Button></>
              }
              {mostrarTarjeta && <App />}
            
            </React.Fragment>
        </div>
      );
  }
  
  export default TarjetaCredito;