import { notFound } from 'next/navigation';
import { cortinas } from '../../data/cortinas';
import { persianas } from '../../data/persianas';
import ImageGallery from '../../../components/ImageGallery';
import ProductCarousel from '../../../components/ProductCarousel';
import { FaShieldAlt, FaHandsHelping, FaStar, FaCheckCircle } from 'react-icons/fa';
import { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string | undefined;
  } ;
} 

// Função para gerar metadados dinâmicos
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cortina = cortinas.find((c) => c.slug === params.slug);
  return {
    title: cortina ? `Cortina ${cortina.nome}` : 'Cortina não encontrada',
    description: cortina ? cortina.descricao : 'Detalhes sobre a cortina',
  };
}

// Componente da página
export default async function CortinaDetailPage({ params }: PageProps) {
  // Extrai o slug do params
  const { slug } = params;

  // Verifica se o slug está presente
  if (!slug) return notFound();

  // Encontra a cortina com base no slug
  const cortina = cortinas.find((c) => c.slug === slug);
  if (!cortina) return notFound();

  // Filtra os produtos relacionados (excluindo a cortina atual)
  const produtosRelacionados = [...cortinas, ...persianas].filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Seção de Imagens do Produto */}
          <div className="flex justify-center items-center">
            <ImageGallery images={cortina.imagens} />
          </div>

          {/* Detalhes do Produto */}
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-primary mb-4">{cortina.nome}</h1>
            <p className="text-gray-700">{cortina.descricao}</p>

            {/* Benefícios do Produto */}
            <div className="space-y-6 mt-8">
              <h3 className="text-2xl font-semibold text-primary">Por que escolher nossa cortina?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4">
                  <FaShieldAlt className="text-primary text-4xl" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Segurança e Confiabilidade</h4>
                    <p className="text-gray-600 text-sm">Trabalhamos com as melhores marcas do mercado, garantindo qualidade e segurança.</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaHandsHelping className="text-primary text-4xl" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Atendimento Personalizado</h4>
                    <p className="text-gray-600 text-sm">Nos dedicamos a entender suas necessidades e fornecer as melhores soluções.</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaStar className="text-primary text-4xl" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Experiência no Mercado</h4>
                    <p className="text-gray-600 text-sm">Com anos de expertise, garantimos um produto que se destaca pela qualidade.</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaCheckCircle className="text-primary text-4xl" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Garantia de Qualidade</h4>
                    <p className="text-gray-600 text-sm">Nossa cortina passa por rigorosos testes de qualidade para durabilidade e excelência.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ação - Falar com Consultor */}
            <div className="mt-8">
              <h3 className="text-1xl font-semibold text-tertiary">Pronto para Transformar seu Espaço?</h3>
              <a
                href={`https://wa.me/5511948365898?text=Olá, gostaria de mais informações sobre a cortina ${cortina.nome}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-all flex items-center justify-center space-x-3"
              >
                <span>Falar com um consultor</span>
              </a>
            </div>
          </div>
        </div>

        {/* Carrossel de Produtos Relacionados */}
        <div className="mt-16">
          <h2 className="text-2xl font-normal text-tertiary mb-6">Produtos Relacionados</h2>
          <ProductCarousel produtos={produtosRelacionados} />
        </div>

        {/* Seção de FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-300 pb-4">
              <h3 className="text-lg font-medium text-gray-800">Qual é o prazo de entrega?</h3>
              <p className="text-gray-600 text-sm">O prazo de entrega pode variar entre 5 a 10 dias úteis, dependendo da localização.</p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <h3 className="text-lg font-medium text-gray-800">Posso personalizar a cortina?</h3>
              <p className="text-gray-600 text-sm">Sim, temos diversas opções de cores e tamanhos para atender às suas necessidades.</p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <h3 className="text-lg font-medium text-gray-800">Quais são as formas de pagamento?</h3>
              <p className="text-gray-600 text-sm">Aceitamos pagamentos via cartão de crédito, boleto bancário e transferência e pix.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}