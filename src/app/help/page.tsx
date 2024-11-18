'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ContactPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        router.push('/user/confirmation');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <h1 className="text-2xl font-bold text-gray-700 mb-4">Contáctanos</h1>
            <form className="w-full max-w-lg bg-white p-6 shadow-lg rounded-lg" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Tu nombre"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Correo electrónico:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="tuemail@ejemplo.com"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                        Mensaje:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Escribe tu mensaje aquí"
                        rows={5}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        onClick={()=>router.push('/user')}
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Enviar
                    </button>
                </div>
            </form>

            <div className="fixed bottom-0 w-full flex justify-around bg-orange-500 p-2 border-t border-gray-300">
            <button onClick={() => router.push('/user')} className="flex flex-col items-center text-white font-bold">
                <span>Atras</span>
            </button>
        </div>
        </div>
    );
};

export default ContactPage;
