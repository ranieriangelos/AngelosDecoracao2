// components/ImageGallery.tsx
'use client';
import { useState } from 'react';

export default function ImageGallery({ images }: { images: string[] }) {
  const [imagemPrincipal, setImagemPrincipal] = useState(images[0]);

  return (
    <div>
      {/* Imagem Principal */}
      <div className="mb-4">
        <img
          src={imagemPrincipal}
          alt="Imagem principal"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Miniaturas */}
      <div className="flex space-x-2">
        {images.map((imagem, index) => (
          <img
            key={index}
            src={imagem}
            alt={`Miniatura ${index + 1}`}
            className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-75"
            onClick={() => setImagemPrincipal(imagem)}
          />
        ))}
      </div>
    </div>
  );
}