import { ProductCard, ProductCardProps } from "./ProductCard";
import { CatalogCTACard } from "./CatalogCTACard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface ProductCarouselSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  products: ProductCardProps[];
  ctaCardProps: {
    lineName: string;
    benefits: string[];
  };
  onCTAClick: (lineName: string) => void;
  backgroundColor?: "white" | "gray";
}

export const ProductCarouselSection = ({
  sectionTitle,
  sectionSubtitle,
  products,
  ctaCardProps,
  onCTAClick,
}: ProductCarouselSectionProps) => {
  return (
    <section className="py-5 md:py-6 lg:py-8 bg-[rgb(108,37,111)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5 md:mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1.5 leading-tight">
            {sectionTitle}
          </h2>
          <p className="text-xs md:text-sm text-white/85 max-w-2xl mx-auto leading-snug">
            {sectionSubtitle}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1.5 md:-ml-2">
            {products.map((product, index) => (
              <CarouselItem
                key={index}
                className="pl-1.5 md:pl-2 basis-[92%] sm:basis-[48%] md:basis-[48%] lg:basis-[32%] xl:basis-[24%] 2xl:basis-[19%]"
              >
                <ProductCard {...product} />
              </CarouselItem>
            ))}
            
            <CarouselItem className="pl-1.5 md:pl-2 basis-[92%] sm:basis-[48%] md:basis-[48%] lg:basis-[32%] xl:basis-[24%] 2xl:basis-[19%]">
              <CatalogCTACard
                {...ctaCardProps}
                onClick={() => onCTAClick(ctaCardProps.lineName)}
              />
            </CarouselItem>
          </CarouselContent>

          <div className="hidden lg:block">
            <CarouselPrevious className="left-0 -translate-x-1/2 bg-white text-[rgb(108,37,111)] hover:bg-white/90" />
            <CarouselNext className="right-0 translate-x-1/2 bg-white text-[rgb(108,37,111)] hover:bg-white/90" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
