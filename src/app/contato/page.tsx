import { useState } from "react";
import emailjs from "emailjs-com"; // Importando a biblioteca

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "",
    endereco: "",
    mensagem: "",
  });

  const [error, setError] = useState<string | null>(null); // Para armazenar mensagens de erro

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    if (!formData.nome || !formData.telefone || !formData.email || !formData.servico || !formData.endereco || !formData.mensagem) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    setError(null); // Limpa mensagem de erro

    // Enviar dados para o EmailJS
    emailjs
      .send(
        "service_3n0j3ie", // ID do serviço configurado no EmailJS
        "template_ta57lke", // ID do template que você criou no EmailJS
        formData,
        "Ze_hO_I0LbuynOnv_" // Seu User ID no EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensagem enviada com sucesso!");
          // Limpar os campos após envio
          setFormData({
            nome: "",
            telefone: "",
            email: "",
            servico: "",
            endereco: "",
            mensagem: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Ocorreu um erro ao enviar a mensagem.");
        }
      );
  };

  return (
    <div id="contato" className="min-h-screen bg-white">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-normal text-center mb-10">Contato</h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Mensagem de erro */}

          {/* Nome */}
          <div className="mb-4">
            <label className="block text-gray-700">Nome</label>
            <input
              type="text"
              name="nome"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Seu nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          {/* Telefone */}
          <div className="mb-4">
            <label className="block text-gray-700">Telefone</label>
            <input
              type="tel"
              name="telefone"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Seu telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Tipo de Serviço */}
          <div className="mb-4">
            <label className="block text-gray-700">Serviço Desejado</label>
            <select
              name="servico"
              className="w-full px-4 py-2 border rounded-lg"
              value={formData.servico}
              onChange={handleChange}
              required
            >
              <option value="">Selecione um serviço</option>
              <option value="lavagem">Lavagem de Cortinas</option>
              <option value="manutencao">Manutenção de Persianas</option>
              <option value="instalacao">Instalação de Cortinas/Persianas</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          {/* Endereço */}
          <div className="mb-4">
            <label className="block text-gray-700">Endereço</label>
            <input
              type="text"
              name="endereco"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Seu endereço"
              value={formData.endereco}
              onChange={handleChange}
              required
            />
          </div>

          {/* Mensagem */}
          <div className="mb-4">
            <label className="block text-gray-700">Mensagem</label>
            <textarea
              name="mensagem"
              className="w-full px-4 py-2 border rounded-lg"
              rows={5}
              placeholder="Descreva sua necessidade ou dúvida"
              value={formData.mensagem}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Botão de Envio */}
          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary"
          >
            Enviar Solicitação
          </button>
        </form>
      </div>
    </div>
  );
}
