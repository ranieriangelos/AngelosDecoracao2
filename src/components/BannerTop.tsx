'use client';
import { useState, useEffect } from 'react';
import { FaTag} from 'react-icons/fa'; // Ícones para cada mensagem

export default function PromoBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const messages = [
    {
      text: "Parcelamos em 12x seus pedidos",
      icon: <FaTag className="mr-2" />,
    },
    {
      text: "26 anos de experiência com cortinas e persianas",
    },
    {
      text: "10% de desconto para pagamentos realizados no pix",
    },
    {
        text: "Atendemos toda a região metropolitana de Recife e Olinda",
      },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000); // Troca a mensagem a cada 3 segundos

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="w-full bg-gradient-to-r from-primary to-primary-dark text-white flex items-center justify-center py-2">
      <div className="flex items-center text-sm uppercase md:text-base font-light">
        {messages[activeIndex].icon}
        <span>{messages[activeIndex].text}</span>
      </div>
    </div>
  );
}