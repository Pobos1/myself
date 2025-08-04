"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

const images = [
  { src: "/swiper2/image1.png", alt: "Изображение " },
  { src: "/swiper2/image2.png", alt: "Изображение " },
  { src: "/swiper2/image3.png", alt: "Изображение " },
  { src: "/swiper2/image4.png", alt: "Изображение " },
  { src: "/swiper2/image5.png", alt: "Изображение " },
  { src: "/swiper2/image6.png", alt: "Изображение " },
  { src: "/swiper2/image7.png", alt: "Изображение " },
  { src: "/swiper2/image8.png", alt: "Изображение " },
  { src: "/swiper2/image9.png", alt: "Изображение " },
  { src: "/swiper2/image10.png", alt: "Изображение " },
  { src: "/swiper2/image11.png", alt: "Изображение " },
];

export default function ImageCarousel() {
  return (
    <div>
      {/* Карусель */}

      <div>
        <Carousel className="py-5">
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i}>
                <div className="flex items-center justify-center h-50">
                  <Image
                    className="sm:rounded-3xl rounded-xl  "
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={200}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
