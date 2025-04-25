import React, { useState, useContext } from 'react'
import { PeliculasContext } from '../context/PeliculasContext'

const Formulario = () => {
  
  const { agregarPelicula } = useContext(PeliculasContext);
  

  const [pelicula, setPelicula] = useState({
    nombre: '',
    descripcion: '',
    genero: ''
  });
  
  
  const [mensaje, setMensaje] = useState('');

  
  const handleChange = (e) => {
    setPelicula({
      ...pelicula,
      [e.target.id]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (!pelicula.nombre_pelicula || !pelicula.descripcion_pelicula || !pelicula.genero_pelicula) {
      setMensaje('Todos los campos son obligatorios');
      setTimeout(() => setMensaje(''), 3000);
      return;
    }
    
    
    const nuevaPelicula = {
      ...pelicula,
      id: Date.now()
    };
    
    
    agregarPelicula(nuevaPelicula);
    
    
    setPelicula({
      nombre_pelicula: '',
      descripcion_pelicula: '',
      genero_pelicula: ''
    });
    
    setMensaje('Película agregada correctamente');
    setTimeout(() => setMensaje(''), 3000);
  };

  return (
    <>
    <div className='bg-white p-6 rounded-xl shadow space-y-4 w-full max-w-sm items-center flex-center'>
        <form onSubmit={handleSubmit}>
        <h1 className='text-xl font-bold mb-4 text-center'>Registro de peliculas</h1>
        
        {mensaje && (
          <div className={`p-2 rounded mb-3 text-center ${mensaje.includes('correctamente') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {mensaje}
          </div>
        )}
        
        <div className="space-y-3">
          <input 
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
            type="text" 
            placeholder='Nombre de la pelicula' 
            id='nombre_pelicula'
            value={pelicula.nombre_pelicula || ''}
            onChange={handleChange}
          />
          <input 
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
            type="text" 
            placeholder='Descripcion de la pelicula' 
            id='descripcion_pelicula'
            value={pelicula.descripcion_pelicula || ''}
            onChange={handleChange}
          />
          <input 
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
            type="text" 
            placeholder='Genero de la pelicula' 
            id='genero_pelicula'
            value={pelicula.genero_pelicula || ''}
            onChange={handleChange}
          />
          <button 
            type="submit"
            className='w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded mt-4'
          >
            Agregar
          </button>
        </div>
        </form>
    </div>
    </>
  )
}

export default Formulario