import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  descricao: string;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="rounded-lg"
      />
      <h2 className="text-xl font-bold mt-4">{product.name}</h2>
    </div>
  );
}