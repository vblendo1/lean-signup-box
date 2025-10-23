import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';
import { CircularTestimonials } from './ui/circular-testimonials';

interface ProductCatalogProps {
  onCTAClick: () => void;
}

const ProductCatalog = ({ onCTAClick }: ProductCatalogProps) => {
  const products = [
    {
      quote: 'Produtos encantadores, com apelo visual irresistível e giro altíssimo. Linha feita para papelarias e lojas que querem vender sem esforço, com itens que atraem o cliente pelo olhar e saem da prateleira por impulso.',
      name: 'Linha Cute',
      designation: 'Fofura que Vende Sozinha',
      src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop'
    },
    {
      quote: 'Linha premium de marcadores vibrantes que pintam em papel, vidro, metal, madeira e plástico. Criada para consumidores criativos e exigentes, une desempenho profissional e design desejado. Produtos que chamam atenção, geram recompra e se vendem sozinhos.',
      name: 'Linha Prisma',
      designation: 'Marcadores que Pintam em Qualquer Superfície',
      src: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=800&auto=format&fit=crop'
    },
    {
      quote: 'Planejadores e acessórios corporativos com design profissional e alta margem de lucro. Feitos para quem quer unir estética e funcionalidade, garantindo produtos que se posicionam como premium e praticamente se vendem sozinhos.',
      name: 'Materiais Office',
      designation: 'Organização que Vende Resultado',
      src: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop'
    },
    {
      quote: 'Itens indispensáveis para qualquer papelaria: úteis, bonitos e de alta saída. Linha com forte apelo na volta às aulas e vendas constantes durante o ano inteiro. Produtos que não encalham e geram fluxo previsível de caixa.',
      name: 'Materiais Escolares',
      designation: 'Praticidade que Gira o Ano Todo',
      src: 'https://images.unsplash.com/photo-1590935216541-8c769c0a8d69?w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section id="produtos" className="py-12 md:py-16 bg-[#6c256f] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-16 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight text-white">
              Conheça os produtos que transformam{' '}
              <span className="text-[#4dbdc6]">
                prateleiras em lucro
              </span>
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto font-medium">
              Escolha entre linhas que unem qualidade, apelo visual e rentabilidade.
            </p>
          </div>
        </AnimatedSection>

        <div className="flex items-center justify-center mb-16 md:mb-20">
          <CircularTestimonials
            testimonials={products}
            autoplay={true}
            colors={{
              name: "#ffffff",
              designation: "#4dbdc6",
              testimony: "#ffffff",
              arrowBackground: "#ffffff",
              arrowForeground: "#6c256f",
              arrowHoverBackground: "#4dbdc6",
            }}
            fontSizes={{
              name: "28px",
              designation: "20px",
              quote: "18px",
            }}
          />
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center px-4">
            <motion.button
              onClick={onCTAClick}
              className="inline-flex items-center justify-center gap-2 px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-bold text-[#6c256f] bg-white rounded-full shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.5)] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Quero revender Onda Pro</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductCatalog;
