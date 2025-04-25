import React, { createContext, useState, useEffect } from 'react';

export const PeliculasContext = createContext();

export const PeliculasProvider = ({ children }) => {
  // Obtener películas del localStorage al cargar
  const [peliculas, setPeliculas] = useState(() => {
    const peliculasGuardadas = localStorage.getItem('peliculas');
    return peliculasGuardadas ? JSON.parse(peliculasGuardadas) : [];
  });
  
  // Obtener favoritos del localStorage
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosGuardados = localStorage.getItem('favoritos');
    return favoritosGuardados ? JSON.parse(favoritosGuardados) : [];
  });

  // Actualizar localStorage cuando cambie el estado
  useEffect(() => {
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
  }, [peliculas]);
  
  // Actualizar localStorage cuando cambien los favoritos
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  // Función para agregar una película
  const agregarPelicula = (nuevaPelicula) => {
    setPeliculas([...peliculas, nuevaPelicula]);
  };
  
  // Función para agregar a favoritos
  const agregarFavorito = (pelicula) => {
    // Verificar si ya existe en favoritos
    if (!favoritos.some(fav => fav.id === pelicula.id)) {
      setFavoritos([...favoritos, pelicula]);
    }
  };
  
  // Función para quitar de favoritos
  const quitarFavorito = (id) => {
    setFavoritos(favoritos.filter(pelicula => pelicula.id !== id));
  };
  
  // Función para verificar si una película es favorita
  const esFavorito = (id) => {
    return favoritos.some(pelicula => pelicula.id === id);
  };

  return (
    <PeliculasContext.Provider value={{ 
      peliculas, 
      agregarPelicula, 
      favoritos, 
      agregarFavorito, 
      quitarFavorito, 
      esFavorito 
    }}>
      {children}
    </PeliculasContext.Provider>
  );
};