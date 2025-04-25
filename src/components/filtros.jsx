import React, { useContext, useState, useEffect } from 'react';
import { PeliculasContext } from '../context/PeliculasContext';

const Filtros = ({ filtroNombre, setFiltroNombre, filtroGenero, setFiltroGenero }) => {
  const { peliculas } = useContext(PeliculasContext);
  const [generos, setGeneros] = useState([]);


  useEffect(() => {
    const generosUnicos = [...new Set(peliculas.map(p => p.genero_pelicula))].filter(Boolean);
    setGeneros(generosUnicos);
  }, [peliculas]);

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4">
      <h3 className="font-medium mb-3">Filtrar películas</h3>
      
      <div className="flex flex-col md:flex-row gap-3">
        {}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Buscar por título..."
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={filtroNombre}
            onChange={(e) => setFiltroNombre(e.target.value)}

    
          />
        </div>
        
        {}
        <div className="md:w-1/3">
          <select 
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={filtroGenero}
            onChange={(e) => setFiltroGenero(e.target.value)}
          >
            <option value="">Todos los géneros</option>
            {generos.map(genero => (
              <option key={genero} value={genero}>{genero}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
  
};

export default Filtros;