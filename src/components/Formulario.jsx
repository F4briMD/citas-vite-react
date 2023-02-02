import { useState, useEffect } from "react"
import Error from "./Error"
const Formulario = ({ pacientes, setPacientes, paciente,setPaciente }) => {

  const [mascota, setMascota] = useState('')
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  //useEffect
  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setMascota(paciente.mascota)
      setNombre(paciente.nombre)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  //ID
  const gererarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([mascota, nombre, email, alta, sintomas].includes('')) {

      setError(true)
      return
    }
    setError(false)

    //objeto de paciente
    const objetoPaciente = {
      mascota,
      nombre,
      email,
      alta,
      sintomas
    }

    if (paciente.id) {
      //Editando registro
     objetoPaciente.id = paciente.id
     const pacientesActualizado = pacientes.map(pacienteState => pacienteState.id ===
       paciente.id ? objetoPaciente : pacienteState)

       setPacientes(pacientesActualizado)
       //limpiar de vuelta 
       setPaciente({})

    }else{  
      //Nuevo registro
      objetoPaciente.id = gererarId()
     setPacientes([...pacientes, objetoPaciente])
    }
    // console.log(objetoPaciente)

    

    //reinicia form
    setMascota('')
    setNombre('')
    setEmail('')
    setAlta('')
    setSintomas('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg text-center mt-5 mb-10 font-medium'>
        Añade Paciente y {''}
        <span className='text-indigo-600 font-bold'>Administralo</span>
      </p>
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-7 px-5 mb-7'>
        {error && <Error mensaje='Todos los campos son obligatorios' />}
        <div className='mb-4'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md'
            id="mascota"
            type="text"
            placeholder="Nombre mascota"
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Propietario</label>
          <input className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md'
            id="propetario"
            type="text"
            placeholder="Propietario"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
          <input className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md'
            id="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta</label>
          <input className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md'
            id="Alta"
            type="date"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea className='border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md' id="sintomas"
            placeholder='Describe los Sintomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          className='bg-indigo-600 w-full text-white p-2 text-xl font-bold cursor-pointer hover:bg-indigo-700 transition duration-300 ease-in-out'
          type="submit"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>

  )
}

export default Formulario