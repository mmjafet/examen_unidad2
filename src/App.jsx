import React from 'react';
import './App.css';
import Formulario from './components/formulario';
import { PeliculasProvider } from './context/PeliculasContext';
import Lista from './components/lista';
import Filtros from './components/filtros';
import Favoritos from './components/favoritos';

function App() {
  return (
    <PeliculasProvider>
      <div className="bg-gray-100  flex items-center justify-center">
        <Formulario />
        </div>
        <div className='bg-gray justify-center items-center  '>

        <Favoritos/>
        <Lista/>
        </div>
        
      
    </PeliculasProvider>
    
  );
}

export default App;
