import React, { useContext, useState, useEffect } from 'react'
import { PeliculasContext } from '../context/PeliculasContext'
import Filtros from './filtros'

const Lista = () => {
  
  const { peliculas, agregarFavorito, quitarFavorito, esFavorito } = useContext(PeliculasContext);
  
  
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroGenero, setFiltroGenero] = useState("");
  const [peliculasFiltradas, setPeliculasFiltradas] = useState([]);

  
  useEffect(() => {
    let resultado = [...peliculas];
    
    
    if (filtroNombre.trim()) {
      resultado = resultado.filter(pelicula => 
        pelicula.nombre_pelicula && 
        pelicula.nombre_pelicula.toLowerCase().includes(filtroNombre.toLowerCase())
      );
    }
    
   
    if (filtroGenero) {
      resultado = resultado.filter(pelicula => 
        pelicula.genero_pelicula === filtroGenero
      );
    }
    
    setPeliculasFiltradas(resultado);
  }, [peliculas, filtroNombre, filtroGenero]);

 
  const handleFavoritoClick = (pelicula) => {
    if (esFavorito(pelicula.id)) {
      quitarFavorito(pelicula.id);
    } else {
      agregarFavorito(pelicula);
    }
  };

  return (
    <div className="w-full max-w-3xl">
      <Filtros 
        filtroNombre={filtroNombre}
        setFiltroNombre={setFiltroNombre}
        filtroGenero={filtroGenero}
        setFiltroGenero={setFiltroGenero}
      />
      
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4 text-center">Películas Registradas</h2>
        
        {peliculasFiltradas.length === 0 ? (
          <div className="text-center py-4 text-gray-500">
            {peliculas.length === 0 
              ? "No hay películas registradas aún" 
              : "No se encontraron películas con los filtros aplicados"}
          </div>
        ) : (
          <div className="space-y-4">
            {peliculasFiltradas.map(pelicula => (
              <div 
                key={pelicula.id} 
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition relative"
              >
                <button
                  onClick={() => handleFavoritoClick(pelicula)}
                  className="absolute top-2 right-2"
                  aria-label={esFavorito(pelicula.id) ? "Quitar de favoritos" : "Agregar a favoritos"}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill={esFavorito(pelicula.id) ? "currentColor" : "none"} 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    className={esFavorito(pelicula.id) ? "text-red-500" : "text-gray-400 hover:text-red-400"}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                
                <h3 className="font-semibold text-lg">{pelicula.nombre_pelicula}</h3>
                <p className="text-gray-600 mt-1">{pelicula.descripcion_pelicula}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mt-2">
                  {pelicula.genero_pelicula}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
  
};

export default Lista;