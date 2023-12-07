const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    //Se hace destructuring del objeto para llamar directamente a las variables en vez de objeto.prop
    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        // const respuesta = confirm('Are you sure you want to delete this')
        // if(respuesta) {
        //     eliminarPaciente(id)
        // }
        confirm('Are you sure you want to delete this') && eliminarPaciente(id)
    }

    
  return (
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-lg">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {""}
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {""}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between mt-5 px-10">
            <button 
                type="button"
                className="bg-green-600 px-10 py-2 rounded-md text-white font-semibold cursor-pointer uppercase hover:bg-green-700 transition-all"
                onClick={() => setPaciente(paciente)}
            >Editar</button>
            <button 
                type="button"
                className="bg-red-600 px-10 py-2 rounded-md text-white font-semibold cursor-pointer uppercase hover:bg-red-700 transition-all"
                onClick={handleEliminar}
            >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente