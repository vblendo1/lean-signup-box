import { Check } from "lucide-react";

export interface ProductCardProps {
  imageSrc: string;
  title: string;
  tags: string[];
  bullets: string[];
}

export const ProductCard = ({ imageSrc, title, bullets }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">
          {title}
        </h3>
        
        <ul className="space-y-2 mt-auto">
          {bullets.slice(0, 3).map((bullet, index) => (
            <li key={index} className="flex items-start gap-2 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
              <Check className="w-4 h-4 text-[#2ECC71] mt-0.5 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
