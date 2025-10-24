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
  backgroundColor = "white",
}: ProductCarouselSectionProps) => {
  const bgClass = backgroundColor === "gray" ? "bg-muted/30" : "bg-background";

  return (
    <section className={`py-12 md:py-16 lg:py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3">
            {sectionTitle}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
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
          <CarouselContent className="-ml-3 md:-ml-4 lg:-ml-5">
            {products.map((product, index) => (
              <CarouselItem
                key={index}
                className="pl-3 md:pl-4 lg:pl-5 basis-[85%] sm:basis-[48%] md:basis-[48%] lg:basis-[32%] xl:basis-[24%] 2xl:basis-[19%]"
              >
                <ProductCard {...product} />
              </CarouselItem>
            ))}
            
            <CarouselItem className="pl-3 md:pl-4 lg:pl-5 basis-[85%] sm:basis-[48%] md:basis-[48%] lg:basis-[32%] xl:basis-[24%] 2xl:basis-[19%]">
              <CatalogCTACard
                {...ctaCardProps}
                onClick={() => onCTAClick(ctaCardProps.lineName)}
              />
            </CarouselItem>
          </CarouselContent>

          <div className="hidden lg:block">
            <CarouselPrevious className="left-0 -translate-x-1/2" />
            <CarouselNext className="right-0 translate-x-1/2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
