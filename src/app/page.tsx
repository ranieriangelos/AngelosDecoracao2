"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import CortinaCarousel from '../components/CortinaCarousel';
import PersianaCarousel from '../components/PersianaCarousel';
import Contato from './contato/page';
import Beneficios from '@/components/Beneficios';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center text-center">
        {/* Imagem de fundo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Conteúdo do Hero */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white px-4"
        >
          <h1 className="text-3xl md:text-3xl font-bold mb-6">
            Transforme sua casa com beleza e funcionalidade
          </h1>
          <p className="text-sm md:text-base mb-4">
            Descubra nossa linha de cortinas e persianas que combinam estilo e praticidade.
          </p>
          <p className="text-sm md:text-base mb-4">
            Desde modelos clássicos até designs modernos, temos a solução perfeita para cada ambiente da sua casa.
          </p>
          <p className="text-sm md:text-base mb-8">
            Venda e instalação de Cortinas e Persianas em toda Região Metropolitana do Recife.
          </p>

          <Link
            href="#cortinas"
            className="bg-primary text-white px-6 py-3 rounded-lg text-base md:text-lg hover:bg-opacity-50 transition-all"
          >
            Descubra Nossa Coleção
          </Link>
        </motion.div>
      </section>

      {/* Seção de Cortinas */}
      <section id="cortinas" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-normal text-primary text-center mb-6 md:mb-8">
            Nossas Cortinas
          </h2>
          <CortinaCarousel />
        </div>
      </section>

      {/* Seção de Persianas */}
      <section id="persianas" className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-normal text-primary text-center mb-6 md:mb-8">
            Nossas Persianas
          </h2>
          <PersianaCarousel />
        </div>
      </section>

      {/* Seção de Contato */}
      <div>
        <Beneficios />
      </div>
      <div id="contato">
        <Contato />
      </div>
      {/* Botão "Voltar ao Topo" */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="seta-up fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
      >
        ↑
      </button>
    </div>
  );
}