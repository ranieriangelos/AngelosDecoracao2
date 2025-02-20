import { FaCheckCircle, FaShieldAlt, FaHandsHelping, FaStar } from "react-icons/fa"; // Ícones do react-icons

export default function Beneficios() {
  return (
    <div className="w-full bg-tertiary py-16"> {/* Fundo escuro com a cor terciária */}
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <FaCheckCircle className="text-white text-6xl mb-4" /> {/* Ícone branco */}
            <h3 className="text-xl font-normal text-white mb-2">Garantia de Qualidade</h3> {/* Título em branco */}
            <p className="text-gray-300 font-light"> {/* Texto branco, mais leve */}
              Todos os nossos produtos passam por rigorosos testes de qualidade, oferecendo durabilidade e excelente performance.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <FaShieldAlt className="text-white text-6xl mb-4" /> {/* Ícone branco */}
            <h3 className="text-xl font-normal text-white mb-2">Segurança e Confiança</h3> {/* Título em branco */}
            <p className="text-gray-300 font-light"> {/* Texto branco, mais leve */}
              Trabalhamos com as melhores marcas do mercado para garantir a segurança e a tranquilidade dos nossos clientes.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center">
            <FaHandsHelping className="text-white text-6xl mb-4" /> {/* Ícone branco */}
            <h3 className="text-xl font-normal text-white mb-2">Atendimento Personalizado</h3> {/* Título em branco */}
            <p className="text-gray-300 font-light"> {/* Texto branco, mais leve */}
              Oferecemos atendimento dedicado para ajudar você a escolher a melhor opção de cortinas ou persianas para o seu espaço.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center">
            <FaStar className="text-white text-6xl mb-4" /> {/* Ícone branco */}
            <h3 className="text-xl font-normal text-white mb-2">Experiência no Mercado</h3> {/* Título em branco */}
            <p className="text-gray-300 font-light"> {/* Texto branco, mais leve */}
              Com anos de experiência, nossa equipe tem o know-how necessário para oferecer soluções de alta qualidade e eficiência.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
