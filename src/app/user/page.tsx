'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { Report } from "./models/reports";
import ReportPost from "@/components/report-view.component";

const HomeScreen = () => {
    const router = useRouter();

    const reports: Report[] = [
      {
          id: 1,
          title: "Terreneitor el coche más poderoso que ha existido!!!!",
          description: "Malfatti 258",
          image: "/images/coche1.jpg",
          votes: 5,
          status: "Arreglado"
      },
      {
          id: 2,
          title: "Problema en calle XYZ",
          description: "Huecos en el pavimento",
          image: "/images/calle.jpg",
          votes: 3,
          status: "Revisado"
      },
      {
        id: 3,
        title: "LA MESA QUE MÁS APLAUDE",
        description: "Más huecos en el pavimento",
        image: "/images/calle.jpg",
        votes: 10,
        status: "Pendiente"
      }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center justify-start w-full h-[calc(100vh-56px)] overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Bienvenid@!</h1>
        <p className="text-center text-gray-600 mb-8">
          Coméntanos sobre problemas en tu sector
        </p>

        <div className="flex flex-col items-center mb-4">
          <button onClick={() => router.push('/user/ReportForm')} className="bg-orange-500 text-white font-bold p-3 w-80 rounded-lg mb-4">
            Publicar una denuncia
          </button>
          <button onClick={()=>router.push('/help')} className="bg-orange-500 text-white font-bold p-3 w-80 rounded-lg">
            Contacto
          </button>
        </div>

        <ReportPost reports={reports}/>
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
  
  export default HomeScreen;
  