'use client'

import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  
  return(
      
        <div className="flex flex-col items-center justify-center min-h-screen bg-orange-500">
          <h1 className="text-4xl font-bold text-white mb-4">¡Bienvenido!</h1>
          <p className="text-lg text-white text-center mb-8">Antes de empezar, necesitamos conocerte un poco :)</p>
    
          <div className="mb-4">
            <label className="block text-white text-lg">¿Cuál es tu nombre?</label>
            <input 
              type="text" 
              placeholder="Ej: Nicolás Gomez" 
              className="mt-2 p-2 rounded-lg w-80 border-2 border-gray-300"
              
            />
          </div>
    
          <div className="mb-8">
            <label className="block text-white text-lg">¿De qué comuna eres?</label>
            <select className="mt-2 p-2 rounded-lg w-80 border-2 border-gray-300">
              <option value="" disabled>Seleccionar comuna...</option>
              <option value="valparaiso">Valparaíso</option>
              <option value="vina-del-mar">Viña del Mar</option>
              <option value="villa-lesbiana">Villa Alemana</option>
            </select>
          </div>

          <button onClick={()=> router.push('/user')} className="bg-white text-orange-500 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
  )
}

export default Home;