// import { useEffect } from 'react'

const Paciente = ({ paciente, setPaciente,eliminarPaciente }) => {
    const { mascota, nombre, email, alta, sintomas,id } = paciente

    const handleEliminar =()=>{
        const respuesta = confirm('Desea eliminar este paciente?')

        if (respuesta) {
        eliminarPaciente(id)
    }
    }

    // useEffect(()=>{
    //   console.log('el comp esta listo')
    // },[])

    return (
        <div>
            <div className='mb-7 mx-5 bg-white shadow-md rounded-xl px-5 py-10 '>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                    <span className='font-normal normal-case'>{mascota}</span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
                    <span className='font-normal normal-case'>{nombre}</span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                    <span className='font-normal normal-case'>{email}</span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {''}
                    <span className='font-normal normal-case'>{alta}</span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
                    <span className='font-normal normal-case'>{sintomas}</span>
                </p>
                <div className="flex justify-between mt-5">
                    <button type="button" className="py-2 px-10 bg-indigo-600 rounded-lg text-white font-bold hover:bg-indigo-700 transition duration-300 
                ease-in-out mr-2"
                        onClick={() => setPaciente(paciente)}
                    >Editar</button>
                    <button type="button"
                    className="py-2 px-10 bg-red-600 rounded-lg text-white font-bold hover:bg-red-700 transition duration-300 ease-in-out"
                     onClick={handleEliminar}
                     >Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default Paciente
