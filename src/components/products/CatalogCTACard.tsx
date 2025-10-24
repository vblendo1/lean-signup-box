import { Lock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CatalogCTACardProps {
  lineName: string;
  benefits: string[];
  onClick: () => void;
}

export const CatalogCTACard = ({ lineName, benefits, onClick }: CatalogCTACardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col justify-center p-4 md:p-5 text-center shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-[rgb(108,37,111)]/10 p-3 rounded-full">
          <Lock className="w-10 h-10 md:w-12 md:h-12 text-[rgb(108,37,111)]" />
        </div>
        
        <div>
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-1.5 leading-tight">
            Ver catálogo completo de {lineName}
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground max-w-sm mx-auto leading-snug">
            Acesso restrito pra lojistas. Inclui preços, prazos e condições especiais.
          </p>
        </div>
        
        <ul className="space-y-2 w-full max-w-sm">
          {benefits.slice(0, 4).map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-foreground text-xs md:text-sm text-left leading-snug">
              <Check className="w-4 h-4 text-[#2ECC71] mt-0.5 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        
        <Button
          onClick={onClick}
          className="w-full bg-[rgb(108,37,111)] text-white hover:bg-[rgb(90,22,93)] transition-colors font-bold text-sm md:text-base py-5 rounded-full shadow-lg touch-target"
        >
          Quero acesso agora →
        </Button>
      </div>
    </div>
  );
};
