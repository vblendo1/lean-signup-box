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
    <section className="py-7 md:py-9 lg:py-12 bg-[#6A1B9A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-[clamp(1.6rem,2vw,2.2rem)] font-bold text-white mb-2">
            {sectionTitle}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-white/80 max-w-3xl mx-auto">
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
          <CarouselContent className="-ml-2 md:-ml-2 lg:-ml-2">
            {products.map((product, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-2 lg:pl-2 basis-[90%] sm:basis-[48%] md:basis-[48%] lg:basis-[32%] xl:basis-[24%] 2xl:basis-[19%]"
              >
                <ProductCard {...product} />
              </CarouselItem>
            ))}
            
            <CarouselItem className="pl-2 md:pl-2 lg:pl-2 basis-[90%] sm:basis-[48%] md:basis-[48%] lg:basis-[32%] xl:basis-[24%] 2xl:basis-[19%]">
              <CatalogCTACard
                {...ctaCardProps}
                onClick={() => onCTAClick(ctaCardProps.lineName)}
              />
            </CarouselItem>
          </CarouselContent>

          <div className="hidden lg:block">
            <CarouselPrevious className="left-0 -translate-x-1/2 bg-white text-[#6A1B9A] hover:bg-white/90" />
            <CarouselNext className="right-0 translate-x-1/2 bg-white text-[#6A1B9A] hover:bg-white/90" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
