import './Tarjeta.css'

const Tarjeta = (props) => {

    const {nombre, profesion, foto} = props;
    console.log
  
  return (
    <>
    <div className="col tarjeta">
      <div className='tarjeta-container'>
    <h2>Tarjeta de presentacion</h2>
    <h3>Nombre: {nombre}</h3>
    <h3>Profesion: {profesion}</h3>
    <h3>Foto: </h3>
    <img src={foto} alt={nombre} />
    </div>
    </div>
    </>
  )
}

export default Tarjeta