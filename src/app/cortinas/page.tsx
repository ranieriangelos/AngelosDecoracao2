  import { cortinas } from '../data/cortinas';
  import CortinaCard from '../../components/CortinaCard';

  export default function CortinasPage() {
    return (
      <div className="min-h-screen bg-gray-100 pt-[100px] py-10 ">
        <div className="container mx-auto px-10">
          <p></p>
          <h1 className="text-4xl font-normal text-center mb-10">Nossas Cortinas</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cortinas.map((cortina) => (
              <CortinaCard
                key={cortina.slug}
                slug={cortina.slug}
                nome={cortina.nome}
                descricao={cortina.descricao}
                imagemPrincipal={cortina.imagemPrincipal}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }