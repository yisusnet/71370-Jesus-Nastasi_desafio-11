import { useState } from "react";
import Alerta from "./components/Alerta"
import Contador from "./components/Contador"
import Tarjeta from "./components/Tarjeta"
import Formulario from "./components/Formulario";


const InicioApp = () => {
  const [contadorInicial, setContadorInicial] = useState(0);
  const [alerta, setAlerta] = useState(null);

  const mostrarAlerta = (datosFormulario) => {
    setAlerta({
      tipo: 'success',
      mensaje: `Nombre: ${datosFormulario.nombre}, Apellidos: ${datosFormulario.apellidos}, Correo: ${datosFormulario.correo}, Mensaje: ${datosFormulario.mensaje}`
    });
  };

  return (
    <>
        <div className="container">

                <div className="col-6 " >
                <Tarjeta nombre="Jesus" 
                profesion="Programador" 
                foto="https://via.placeholder.com/400x200"/>
                    
            </div>
        </div>

        <Alerta tipo='warning' children='este es un mensaje de warning'/>
        <Alerta tipo='success' children='este es un mensaje de success'/>
        <Alerta tipo='error' children='este es un mensaje de error'/>

        <Contador contadorInicial={contadorInicial} setContadorInicial={setContadorInicial} />

<div className="container mt-5">
  <div className="col-4 ">
  <Formulario mostrarAlerta={mostrarAlerta} />

  </div>
</div>
 
{alerta && <Alerta tipo={alerta.tipo} className="mt-5">{alerta.mensaje}</Alerta>}


    </>
  )
}

export default InicioApp