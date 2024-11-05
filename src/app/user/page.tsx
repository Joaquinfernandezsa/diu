'use client'

import React from "react";
import { useRouter } from "next/navigation";

const ReportScreen = () => {
    const router = useRouter();
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Bienvenid@!</h1>
        <p className="text-center text-gray-600 mb-8">
          Coméntanos sobre problemas en tu sector
        </p>
  
        <div className="flex flex-col items-center mb-4">
          <button onClick={() => router.push('/user/ReportForm')} className="bg-orange-500 text-white font-bold p-3 w-80 rounded-lg mb-4">
            Publicar una denuncia
          </button>
          <button onClick={()=> router.push('/user/OtherReports')} className="bg-orange-500 text-white font-bold p-3 w-80 rounded-lg mb-4">
            Ver denuncias ya existentes
          </button>
          <button onClick={()=>router.push('/help')} className="bg-orange-500 text-white font-bold p-3 w-80 rounded-lg">
            Ayuda
          </button>
        </div>

        <div className="fixed bottom-0 w-full flex justify-around bg-orange-500 p-2 border-t border-gray-300">
            <button onClick={() => router.push('/')} className="flex flex-col items-center text-white font-bold">
                <span>Salir</span>
            </button>
            <button onClick={()=>router.push('/user/UserReports')} className="flex flex-col items-center text-white font-bold">
              <span>Mis denuncias</span>
            </button>
        </div>
      </div>
    );
  };
  
  export default ReportScreen;
  