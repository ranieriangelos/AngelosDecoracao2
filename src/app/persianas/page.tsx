// app/persianas/page.tsx
import { persianas } from '../data/persianas';
import PersianaCard from '../../components/PersianaCard';

export default function PersianasPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Nossas Persianas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {persianas.map((persiana) => (
            <PersianaCard
              key={persiana.slug}
              slug={persiana.slug}
              nome={persiana.nome}
              descricao={persiana.descricao}
              imagemPrincipal={persiana.imagemPrincipal}
            />
          ))}
        </div>
      </div>
    </div>
  );
}