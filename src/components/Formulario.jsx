import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    
    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [sintomas, setSintomas] = useState("")

    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(pacientes).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    },[paciente])

    const generarID = () => { 
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const resetForm = () => {
        //reiniciar el formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    // const agregarPaciente = () => {
    //     //Objeto Paciente
    //     const nuevoPaciente = {
    //         nombre,
    //         propietario,
    //         email,
    //         fecha,
    //         sintomas,
    //         id: generarID()
    //     }     

    //     setPacientes([...pacientes, nuevoPaciente])
    // }

    // const editarPaciente = () => {
    //     //esta es una mala practica pk no puedes modificar un objeto directamente, sino mediante su set, lo ideal es crear un arreglo nuevo
    //     paciente.nombre = nombre
    //     paciente.propietario = propietario
    //     paciente.email = email
    //     paciente.fecha = fecha
    //     paciente.sintomas = sintomas
    //     setPaciente({})
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        //validacion del formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true)
            return;
        }
        setError(false)

        const nuevoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }     

        if(paciente.id) {
            nuevoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})
         }
        else {
            nuevoPaciente.id = generarID() 
            setPacientes([...pacientes, nuevoPaciente])
         }

        resetForm()

    }
    
    return (


    <div className="mx-5 md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-xl mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold ">Administralos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={ handleSubmit }>
            
            {error && <Error mensaje='Todos los Campos son Obligatorios' />}

            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                <input 
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la Mascota"
                    className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                    value={nombre}
                    onChange={ (e) => setNombre(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                <input 
                    id="propietario"
                    type="text"
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                    value={propietario}
                    onChange={ (e) => setPropietario(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                <input 
                    id="email"
                    type="email"
                    placeholder="Email del Propietario"
                    className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
                <input 
                    id="alta"
                    type="date"
                    className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                    value={fecha}
                    onChange={ (e) => setFecha(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                <textarea 
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                    placeholder="Describe los Sintomas"
                    value={sintomas}
                    onChange={ (e) => setSintomas(e.target.value)}
                />
            </div>

            <input 
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md cursor-pointer hover:bg-indigo-700 transition-all"
                value={paciente.id ? "Guardar" : "Agregar Paciente"}
            />   
        </form>
        
    </div>
  )
}

export default Formulario