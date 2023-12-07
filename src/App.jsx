import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
//a mi se me ocurrio hacerlo asi, esta mal?
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  //const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

//de esta forma lo hizo el teacher, un useEffect que se realice una vez al cargar la app y recupere lo que hay LS y setea el useState pacientes
  useEffect(() => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
    setPacientes(pacientesLS)
    console.log(pacientesLS)
  }, [])
  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])

  const eliminarPaciente =(id) => {
    const pacientesAtualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesAtualizados)  
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 sm:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes} 
          paciente={paciente} 
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes} 
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
