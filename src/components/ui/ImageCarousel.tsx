"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/swiper1/image1.jpg", alt: "Изображение " },
  { src: "/swiper1/image2.jpg", alt: "Изображение " },
  { src: "/swiper1/image3.jpg", alt: "Изображение " },
  { src: "/swiper1/image4.jpg", alt: "Изображение " },
  { src: "/swiper1/image5.jpg", alt: "Изображение " },
  { src: "/swiper1/image6.jpg", alt: "Изображение " },
  { src: "/swiper1/image7.jpg", alt: "Изображение " },
  { src: "/swiper1/image8.jpg", alt: "Изображение " },
  { src: "/swiper1/image9.jpg", alt: "Изображение " },
  { src: "/swiper1/image10.jpg", alt: "Изображение " },
  { src: "/swiper1/image11.jpg", alt: "Изображение " },
  { src: "/swiper1/image12.jpg", alt: "Изображение " },
  { src: "/swiper1/image13.jpg", alt: "Изображение " },
  { src: "/swiper1/image14.jpg", alt: "Изображение " },
  { src: "/swiper1/image15.jpg", alt: "Изображение " },
  { src: "/swiper1/image16.jpg", alt: "Изображение " },
  { src: "/swiper1/image17.jpg", alt: "Изображение " },
  { src: "/swiper1/image18.jpg", alt: "Изображение " },
  { src: "/swiper1/image19.jpg", alt: "Изображение " },
  { src: "/swiper1/image20.jpg", alt: "Изображение " },
  { src: "/swiper1/image21.jpg", alt: "Изображение " },
  { src: "/swiper1/image22.jpg", alt: "Изображение " },
  { src: "/swiper1/image23.jpg", alt: "Изображение " },
  { src: "/swiper1/image24.jpg", alt: "Изображение " },
  { src: "/swiper1/image25.jpg", alt: "Изображение " },
  { src: "/swiper1/image26.jpg", alt: "Изображение " },
  { src: "/swiper1/image27.jpg", alt: "Изображение " },
  { src: "/swiper1/image28.jpg", alt: "Изображение " },
  { src: "/swiper1/image29.jpg", alt: "Изображение " },
  { src: "/swiper1/image30.jpg", alt: "Изображение " },
  { src: "/swiper1/image31.jpg", alt: "Изображение " },
  { src: "/swiper1/image32.jpg", alt: "Изображение " },
  { src: "/swiper1/image33.jpg", alt: "Изображение " },
  { src: "/swiper1/image34.jpg", alt: "Изображение " },
];

export default function ImageCarousel() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const openModal = (img: string) => {
    setCurrentImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div>
      {/* Карусель */}

      <div>
        <Carousel className="">
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i} onClick={() => openModal(img.src)}>
                <div className="py-20 ">
                  <Image
                    className="rounded-2xl mx-auto w-96 h-72 object-cover"
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

      {/* Модалка */}
      {modalOpen && currentImage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={currentImage}
              alt="Fullscreen"
              fill
              className="object-contain rounded"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
