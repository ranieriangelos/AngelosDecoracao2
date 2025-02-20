'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const cortinas = [
  {
    slug: 'elegance',
    nome: 'Elegance',
    descricao: 'Transforme seu ambiente com sofisticação. Feita com tecidos premium e acabamento impecável...',
    imagem: '/images/cortina-elegance-1.jpg',
  },
  {
    slug: 'motorizada',
    nome: 'Motorizada',
    descricao: 'Com a Cortina Motorizada, você controla a iluminação com um simples toque...',
    imagem: '/images/cortina-motorizada-1.jpg',
  },
  {
    slug: 'romana',
    nome: 'Romana',
    descricao: 'A Cortina Romana combina um design sofisticado com um mecanismo prático de dobras...',
    imagem: '/images/cortina-romana-1.jpg',
  },
  {
    slug: 'rolo',
    nome: 'Rolô',
    descricao: 'A Cortina Rolô é perfeita para quem busca um ambiente clean e moderno...',
    imagem: '/images/cortina-rolo-1.jpg',
  },
];

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={16}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="my-10"
      breakpoints={{
        320: { slidesPerView: 1 }, // 1 item em telas pequenas
        640: { slidesPerView: 2 }, // 2 itens em telas médias
        1024: { slidesPerView: 3 }, // 3 itens em desktops
      }}
    >
      {cortinas.map((cortina) => (
        <SwiperSlide key={cortina.slug}>
          <Link href={`/cortinas/${cortina.slug}`} className="block">
            <div className="relative flex flex-col items-center p-4 rounded-lg cursor-pointer bg-white shadow-md hover:shadow-lg transition">
              <div className="w-full h-60 relative">
                <Image
                  src={cortina.imagem}
                  alt={cortina.nome}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-medium mt-4 text-tertiary">{cortina.nome}</h3>
              <p className="text-gray-600 font-light text-sm text-center">
                {cortina.descricao.length > 80 ? cortina.descricao.slice(0, 77) + "..." : cortina.descricao}
              </p>
              <button className="mt-4 mb-5 bg-tertiary text-white px-4 py-2 rounded-lg hover:bg-secondary">
                Saiba Mais
              </button>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
