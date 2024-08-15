import { useState } from "react";


const Formulario = ({ mostrarAlerta }) => {
    const formInicial = {
        nombre: "",
        apellidos: "",
        correo: "",
        mensaje: ""
      }

    const [estadoFormulario, setEstadoFormulario] = useState(formInicial);


  const cambioForm = (event) => {
    const { name, value } = event.target;

    setEstadoFormulario({
      ...estadoFormulario,
      [name]: value,
    });
  };

  const envioFormulario = (eventEnvio) => {
    eventEnvio.preventDefault();
    mostrarAlerta(estadoFormulario); 
  };

  return (
    <form onSubmit={envioFormulario}>
      <div className="mb-3">
        <label htmlFor="lbl-nombre" className="form-label">Nombres</label>
        <input 
          type="text"
          className="form-control" 
          id="lbl-nombre"
          placeholder="Escriba su nombre" 
          name="nombre"
          value={estadoFormulario.nombre}
          onChange={cambioForm}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="lbl-apellidos" className="form-label">Apellidos</label>
        <input 
          type="text" 
          className="form-control" 
          id="lbl-apellidos" 
          placeholder="Escriba sus apellidos"
          name="apellidos"
          value={estadoFormulario.apellidos}
          onChange={cambioForm}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="lbl-correo" className="form-label">Correo</label>
        <input
          type="email" 
          className="form-control" 
          id="lbl-correo" 
          placeholder="name@example.com"  
          name="correo"
          value={estadoFormulario.correo}
          onChange={cambioForm}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="mensajeTextarea" className="form-label">Mensaje</label>
        <textarea 
          className="form-control" 
          id="mensajeTextarea"
          rows="3"  
          name="mensaje"
          value={estadoFormulario.mensaje}
          onChange={cambioForm}
        />
      </div>

      <button type="submit" className="btn btn-success mb-5 ">Enviar</button>
    </form>
  );
};

export default Formulario;
