'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ReportForm = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState([]);
  const [time_ocurrance, setTimeOcurrance] = useState('');
  const router = useRouter();

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      description,
      location,
      images
    });

    setDescription('');
    setLocation('');
    setImages([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">¡Reporta un problema!</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <div className="mb-4">
          <label htmlFor='category' className='block text-gray-700 font-medium mb-2'>
            Tipo de denuncia
          </label>

          <div className='mb-4'>
            <select className="mt-2 p-2 rounded-lg w-80 border-2 border-gray-300">
              <option value="" disabled>Seleccionar categoría...</option>
              <option value="incendio">Incendio</option>
              <option value="choque">Accidente automovilístico</option>
              <option value="corte">Corte de luz</option>
            </select>
          </div>

          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
            Descripción del problema:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
            rows={4}
            placeholder="Describe el problema que encontraste..."
            
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
            ¿Dónde ocurrió?
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
            placeholder="Ingresa la ubicación"
            
          />


          <label htmlFor="time_ocurrance" className='block text-gray-700 font-medium mb-2'>
            ¿A qué hora?
          </label>
          <div className="">
            <input
              id="time_of_ocurrance"
              type="time"
              value={time_ocurrance}
              onChange={e => setTimeOcurrance(e.target.value)} 
              className='p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500'
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="images" className="block text-gray-700 font-medium mb-2">
            Subir fotos (opcional):
          </label>
          <input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="w-full p-3 rounded-lg border border-gray-300"
          />
        </div>

        {images.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Imágenes seleccionadas:</h3>
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Imagen ${index + 1}`}
                  width={500}
                  height={500}
                  className="w-24 h-24 rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        )}

        <div className='flex flex-row items-center justify-center space-x-10'>
          <button
            type="submit"
            className=" bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition duration-300"
            onClick={()=>router.push('/user')}
            >
            Publicar denuncia
          </button>
          <button 
            onClick={()=>router.push('/user')}
            className='bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition duration-300'>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportForm;
