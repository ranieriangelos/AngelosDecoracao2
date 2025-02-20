"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { cortinas }  from "../app/data/cortinas";
import { persianas } from "../app/data/persianas";

interface Product {
  slug: string;
  nome: string;
  imagens: string[];
  descricao: string;
}

interface ProductCarouselProps {
  produtos: Product[];
}

export default function ProductCarousel({ produtos }: ProductCarouselProps) {
  return (
    <div className="mt-16">
      <h2 className="text-1xl font-normal mb-6">Outros produtos que podem te interessar</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {produtos.map((produto) => {
          // Definir se é uma cortina ou uma persiana
          const categoria = cortinas.some((c) => c.slug === produto.slug) ? "cortinas" : "persianas";
          const url = `/${categoria}/${produto.slug}`;

          return (
            <SwiperSlide key={produto.slug}>
              <Link href={url} className="block">
                <div className="border p-4 hover:shadow-lg transition rounded-lg">
                  <img
                    src={produto.imagens[0]}
                    alt={produto.nome}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h3 className="text-lg font-medium mt-2">{produto.nome}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {produto.descricao.length > 60
                      ? produto.descricao.slice(0, 57) + "..."
                      : produto.descricao}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Parcelamos em 12x</p>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
