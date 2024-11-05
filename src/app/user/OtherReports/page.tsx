'use client'

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Report } from "../models/reports";

const ReportList = () => {
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
        }
    ]; // esta es una lista de denuncias de ejemplo, puedes cargarla de una base de datos más adelante.

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <h1 className="text-2xl font-bold text-gray-700 mb-4">Denuncias recientes</h1>
            <div className="flex flex-col items-center w-full max-w-md">
                {reports.map((report) => (
                    <div key={report.id} className="border p-4 rounded-lg shadow-md mb-4 w-full">
                        <h2 className="text-lg font-semibold mb-2">{report.title}</h2>
                        <p className="text-gray-600 mb-1">{report.description}</p>
                        <div className="flex justify-between items-center">
                            <Image 
                                src={report.image}
                                alt=""
                                width={500}
                                height={500} 
                                className="w-24 h-24 object-cover rounded-lg" 
                            />
                            <div className="flex flex-col items-end ">
                                <p className="text-sm text-gray-600 mb-1">+{report.votes} valoraciones</p>
                                <button className="bg-green-500 text-white p-2 rounded-lg">Valorar</button>
                                <p className="text-sm text-gray-600 mb-1">Estado: {report.status}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="fixed bottom-0 w-full flex justify-around bg-orange-500 p-2 border-t border-gray-300">
                <button onClick={() => router.push('/user')} className="flex flex-col items-center text-white font-bold">
                    <span>Inicio</span>
                </button>
                <button onClick={() => router.push('/user/UserReports')} className="flex flex-col items-center text-white font-bold">
                    <span>Mis denuncias</span>
                </button>
            </div>
        </div>
    );
};

export default ReportList;
