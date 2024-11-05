'use client'

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Report } from "../models/reports";

const MyReports = () => {
    const router = useRouter();
    const Reports : Report[] = [
        {
            id: 1,
            title: "Denuncia de ejemplo",
            description: "Esta es una denuncia publicada por el usuario.",
            image: "/images/report-example.jpg",
            votes: 2,
            status: "Pendiente"
        },
        {
            id: 2,
            title: "Se lo llevan los milicos",
            description: "En avenida Argentina se lo estan llevando preso",
            image: "",
            votes: 1,
            status: "Revisada"
        }
    ]; 

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <h1 className="text-2xl font-bold text-gray-700 mb-4">Mis Denuncias</h1>
            <div className="flex flex-col items-center w-full max-w-md">
                {Reports.map((report) => (
                    <div key={report.id} className="border p-4 rounded-lg shadow-md mb-4 w-full">
                        <h2 className="text-lg font-semibold mb-2">{report.title}</h2>
                        <p className="text-gray-600 mb-2">{report.description}</p>
                        <div className="flex justify-between items-center">
                            <Image 
                            src={report.image} 
                            alt=""
                            width={500}
                            height={500} 
                            className="w-24 h-24 object-cover rounded-lg" />
                            <div className="flex flex-col items-start">
                                <p className="text-sm text-gray-600 mb-1">Estado: {report.status}</p>
                                <p className="text-sm text-gray-600 mb-1">Votos: {report.votes}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="fixed bottom-0 w-full flex justify-around bg-orange-500 p-2 border-t border-gray-300">
                <button onClick={() => router.push('/user')} className="flex flex-col items-center text-white font-bold">
                    <span>Inicio</span>
                </button>
                <button onClick={() => router.push('/user/otherReports')} className="flex flex-col items-center text-white font-bold">
                    <span>Denuncias Recientes</span>
                </button>
            </div>
        </div>
    );
};

export default MyReports;
