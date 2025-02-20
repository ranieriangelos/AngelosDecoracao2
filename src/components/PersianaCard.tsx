// components/PersianaCard.tsx
import Link from 'next/link';
import Image from 'next/image';

interface PersianaCardProps {
  slug: string;
  nome: string;
  descricao: string;
  imagemPrincipal: string;
}

export default function PersianaCard({ slug, nome, descricao, imagemPrincipal }: PersianaCardProps) {
  return (
    <Link href={`/persianas/${slug}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
        <div className="w-full h-48 relative">
          <Image
            src={imagemPrincipal}
            alt={nome}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">{nome}</h2>
          <p className="text-gray-600">{descricao}</p>
        </div>
      </div>
    </Link>
  );
}