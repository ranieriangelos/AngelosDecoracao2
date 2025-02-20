import Link from 'next/link';
import Image from 'next/image'; // Importe o componente Image do Next.js

interface CortinaCardProps {
  slug: string;
  nome: string;
  descricao: string;
  imagemPrincipal: string;
}

export default function CortinaCard({ slug, nome, descricao, imagemPrincipal }: CortinaCardProps) {
  return (
    <Link href={`/cortinas/${slug}`} passHref>
      <article className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
        <div className="w-full h-48 relative">
          <Image
            src={imagemPrincipal}
            alt={nome}
            fill
            className="object-cover"
            priority // Adicione prioridade ao carregamento da imagem
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">{nome}</h2>
          <p className="text-gray-600">{descricao}</p>
        </div>
      </article>
    </Link>
  );
}