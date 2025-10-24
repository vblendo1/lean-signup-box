import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface ProductCardProps {
  imageSrc: string;
  title: string;
  tags: string[];
  bullets: string[];
}

export const ProductCard = ({ imageSrc, title, tags, bullets }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-[11px] md:text-xs px-2.5 py-1">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">
          {title}
        </h3>
        
        <ul className="space-y-2 mt-auto">
          {bullets.slice(0, 3).map((bullet, index) => (
            <li key={index} className="flex items-start gap-2 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
