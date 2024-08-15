import './Alerta.css'

const Alerta = ({tipo, children}) => {

 
  return (
    <>
    <div className={`alerta-${tipo}`} >
       <h2>{children}</h2> 

       </div>
    </>    


  )
}

export default Alerta