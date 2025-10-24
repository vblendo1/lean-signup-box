import { Check } from "lucide-react";

export interface ProductCardProps {
  imageSrc: string;
  title: string;
  tags: string[];
  bullets: string[];
}

export const ProductCard = ({ imageSrc, title, bullets }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="p-3 md:p-4 flex flex-col flex-1">
        <h3 className="text-base md:text-lg font-bold text-foreground mb-2 leading-tight">
          {title}
        </h3>
        
        <ul className="space-y-1.5">
          {bullets.slice(0, 3).map((bullet, index) => (
            <li key={index} className="flex items-start gap-1.5 text-xs md:text-sm text-muted-foreground leading-snug">
              <Check className="w-3.5 h-3.5 text-[#2ECC71] mt-0.5 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
