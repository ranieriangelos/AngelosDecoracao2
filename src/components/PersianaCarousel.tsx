'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const persianas = [
  {
    slug: "persiana-horizontal",
    nome: "Persiana Horizontal",
    descricao: "Versátil e elegante, a Persiana Horizontal controla a luz com precisão...",
    imagem: "/images/persiana-Horizontal-1.jpg",
  },
  {
    slug: "persiana-double-vision",
    nome: "Persiana Double Vision",
    descricao: "A Persiana Double Vision alterna faixas translúcidas e opacas...",
    imagem: "/images/persiana-DoubleVision-1.jpg",
  },
  {
    slug: "persiana-vertical",
    nome: "Persiana Vertical",
    descricao: "A Persiana Vertical é perfeita para janelas amplas e portas de vidro...",
    imagem: "/images/persiana-vertical-1.jpg",
  },
  {
    slug: "horizontal-de-aluminio",
    nome: "Horizontal de Alumínio",
    descricao: "A Persiana Horizontal de Alumínio é durável e moderna...",
    imagem: "/images/persiana-HorizontalAluminio-2.jpg",
  },
];

export default function PersianaCarousel() {
  return (
    <Swiper
      spaceBetween={16}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="my-10"
      breakpoints={{
        320: { slidesPerView: 1 }, // 1 item em celulares
        640: { slidesPerView: 2 }, // 2 itens em tablets
        1024: { slidesPerView: 3 }, // 3 itens no desktop
      }}
    >
      {persianas.map((persiana) => (
        <SwiperSlide key={persiana.slug}>
          <Link href={`/persianas/${persiana.slug}`} className="block">
            <div className="relative flex flex-col items-center p-4 rounded-lg cursor-pointer bg-white shadow-md hover:shadow-lg transition">
              <div className="w-full h-60 relative">
                <Image
                  src={persiana.imagem}
                  alt={persiana.nome}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-medium mt-4 text-tertiary">{persiana.nome}</h3>
              <p className="text-gray-600 font-light text-sm text-center">
                {persiana.descricao.length > 80 ? persiana.descricao.slice(0, 77) + "..." : persiana.descricao}
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
