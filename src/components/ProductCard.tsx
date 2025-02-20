import Image from 'next/image';

export default function ProductCard({ product }: { product: any }) {
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
      <p className="text-gray-700">{product.price}</p>
    </div>
  );
}