import React, { useContext } from 'react';
import { PeliculasContext } from '../context/PeliculasContext';

const Favoritos = () => {
  const { favoritos, quitarFavorito } = useContext(PeliculasContext);

  return (
    <div className="bg-white p-6 rounded-xl shadow w-full max-w-3xl">
      <h2 className="text-xl font-bold mb-4 text-center">Películas Favoritas</h2>
      
      {favoritos.length === 0 ? (
        <div className="text-center py-4 text-gray-500">
          No tienes películas favoritas aún
        </div>
      ) : (
        <div className="space-y-4">
          {favoritos.map(pelicula => (
            <div 
              key={pelicula.id} 
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition relative"
            >
              <button
                onClick={() => quitarFavorito(pelicula.id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                aria-label="Quitar de favoritos"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
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
  );
};

export default Favoritos;