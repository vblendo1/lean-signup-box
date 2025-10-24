import { Lock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CatalogCTACardProps {
  lineName: string;
  benefits: string[];
  onClick: () => void;
}

export const CatalogCTACard = ({ lineName, benefits, onClick }: CatalogCTACardProps) => {
  return (
    <div className="bg-[hsl(var(--primary))] rounded-xl overflow-hidden h-full flex flex-col justify-center p-6 md:p-8 text-center shadow-lg">
      <div className="flex flex-col items-center space-y-6">
        <div className="bg-white/10 p-4 rounded-full">
          <Lock className="w-12 h-12 text-[hsl(var(--accent))]" />
        </div>
        
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Ver catálogo completo de {lineName}
          </h3>
          <p className="text-sm md:text-base text-white/85 max-w-sm mx-auto">
            Acesso restrito pra lojistas. Inclui preços, prazos e condições especiais.
          </p>
        </div>
        
        <ul className="space-y-3 w-full max-w-sm">
          {benefits.slice(0, 4).map((benefit, index) => (
            <li key={index} className="flex items-start gap-3 text-white text-sm md:text-base text-left">
              <Check className="w-5 h-5 text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        
        <Button
          onClick={onClick}
          className="w-full bg-[hsl(var(--accent))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--accent))]/90 hover:scale-105 transition-all font-bold text-base md:text-lg py-6 rounded-full shadow-lg"
        >
          Quero acesso agora →
        </Button>
      </div>
    </div>
  );
};
