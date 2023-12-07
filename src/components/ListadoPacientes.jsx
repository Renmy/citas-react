import { useEffect } from "react"
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (

    (pacientes && pacientes.length) ? 
    <>
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {""}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
            { pacientes.map(paciente => 
            <Paciente 
                paciente={paciente} 
                key={paciente.id} 
                setPaciente={setPaciente} 
                eliminarPaciente={eliminarPaciente} 
            />) }
        
        </div>
    </> :
    <>
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Agrega Pacientes {""}
                <span className="text-indigo-600 font-bold">y apareceran aqui</span>
            </p>
        </div>
    </>

    
  )
}

export default ListadoPacientes