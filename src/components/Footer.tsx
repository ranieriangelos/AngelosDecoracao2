'use client';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  const whatsappNumber = '5511948365898'; // Substitua pelo seu número de WhatsApp
  const whatsappMessage = 'Olá, gostaria de mais informações sobre os serviços.'; // Mensagem padrão

  return (
    <footer className="bg-gray-800 text-white py-8  ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1: Informações de contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <a href={`tel:${whatsappNumber}`} className="hover:text-primary">
                  (11) 948365898
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-2" />
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:contato@angelosdecoracao.com" className="hover:text-primary">
                  contato@angelosdecoracao.com
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Recife, PE</span>
              </li>
            </ul>
          </div>

          {/* Coluna 2: Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-primary">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#cortinas" className="hover:text-primary">
                  Cortinas
                </Link>
              </li>
              <li>
                <Link href="#persianas" className="hover:text-primary">
                  Persianas
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-primary">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Redes sociais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <FaWhatsapp size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/suaempresa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/suaempresa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Direitos autorais */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Angelos Decoração. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}