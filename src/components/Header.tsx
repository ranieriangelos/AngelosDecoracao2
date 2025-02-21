'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import PromoBar from './BannerTop';
import Image from 'next/image';

// Importando os dados de cortinas e persianas
import { cortinas } from '../app/data/cortinas';
import { persianas } from '../app/data/persianas';

export default function Header() {
  const whatsappNumber = '5511948365898';
  const whatsappMessage = 'Olá, gostaria de mais informações sobre os serviços.';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null); // Fechar dropdowns ao fechar o menu
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* PromoBar no topo */}

      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Logo */}
        <Link href="/" className="text-gray-700 hover:text-primary block py-2 md:py-0" onClick={closeMenu}>
          <Image
            src="/images/logo-angelos-decoracao.png"
            alt="Logo Angelos Decoração"
            width={100} // Defina a largura desejada
            height={70} // Defina a altura desejada
            className="h-16" // Ajuste a altura conforme necessário
          />
        </Link>
        {/* Botão do menu hambúrguer (mobile) */}
        <button onClick={toggleMenu} className="text-primary md:hidden focus:outline-none">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Menu principal */}
        <nav
          className={`fixed md:static top-16 left-0 w-full md:w-auto bg-white shadow-md md:shadow-none transform transition-transform duration-300 ease-in-out 
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center p-4 md:p-0">
            <li>
              <Link href="/" className="text-gray-700 hover:text-primary block py-2 md:py-0" onClick={closeMenu}>
                Início
              </Link>
            </li>

            {/* Dropdown Cortinas */}
            <li
              className="relative"
              onMouseEnter={() => setOpenDropdown('cortinas')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-gray-700 hover:text-primary block py-2 md:py-0">
                Cortinas
              </button>
              <ul
                className={`absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2 transition-all duration-200 ease-in-out 
                ${openDropdown === 'cortinas' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              >
                {cortinas.map((cortina) => (
                  <li key={cortina.slug}>
                    <Link
                      href={`/cortinas/${cortina.slug}`}
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      {cortina.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Dropdown Persianas */}
            <li
              className="relative"
              onMouseEnter={() => setOpenDropdown('persianas')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-gray-700 hover:text-primary block py-2 md:py-0">
                Persianas
              </button>
              <ul
                className={`absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2 transition-all duration-200 ease-in-out 
                ${openDropdown === 'persianas' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              >
                {persianas.map((persiana) => (
                  <li key={persiana.slug}>
                    <Link
                      href={`/persianas/${persiana.slug}`}
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      {persiana.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link href="#contato" className="text-gray-700 hover:text-primary block py-2 md:py-0" onClick={closeMenu}>
                Contato
              </Link>
            </li>

            {/* Link para o WhatsApp */}
            <li>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-600 hover:text-green-700 py-2 md:py-0"
              >
                <FaWhatsapp className="mr-2 text-primary" size={24} />
                <h3 className="text-primary">WhatsApp</h3>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <PromoBar />
    </header>
  );
}
