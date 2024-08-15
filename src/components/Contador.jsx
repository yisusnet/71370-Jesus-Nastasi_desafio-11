

const Contador = ({contadorInicial, setContadorInicial}) => {


 const handleIncrementar  = () => {

 setContadorInicial(contadorInicial + 1 )
    

}

const handleDecrementar = () => {

setContadorInicial(contadorInicial - 1 )
    
}
const handleRestart  = () => {

setContadorInicial(0)
    
}

  return (
   <>
    <h2>contador: {contadorInicial}</h2>
   <button className="btn btn-primary me-2" onClick={handleIncrementar}>Incrimentar</button>
   <button className="btn btn-warning me-2" onClick={handleDecrementar}>Decrimentar</button>
   <button className="btn btn-danger" onClick={handleRestart}>Resetear</button>
   
   </>
  )
}

export default Contador