import { ButtonBlack } from "@/shared/ButtonBlack";
import { ButtonWhite } from "@/shared/ButtonWhite";
import { Horizontaltabl } from "@/shared/horizontaltabl";
import { Paragraph } from "@/shared/Paragraph";
import { Servicevertical } from "@/shared/Servicesvertical";
import { Verticaltabl } from "@/shared/verticaltabl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
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
  ];

  return (
    <div>
      {/* Div, который отображается на больших экранах */}
      <div className="hidden sm:block bg-white w-full">
        <div className="w-2/3 bg-white mx-auto">
          <section className="">
            <div className="pt-12 flex flex-row ">
              <div className="rounded-xl w-1/2 h-100 bg-[url(/pletneva.png)] bg-cover bg-center shrink-0 me-6"></div>
              <div className="flex flex-col text-black">
                <p className="text-7xl">Ксения</p>
                <p className="text-xl ps-1">Ведущая твоих праздников</p>
                <p className="text-md ps-1 pe-8 py-4">
                  Я занимаюсь проведением и организацией самых разных
                  мероприятий. Это могут быть свадьбы, юбилеи, корпоративы,
                  выпускные вечера или просто веселые вечеринки.
                </p>
                <ButtonBlack title="Посмотреть услуги" link="#bgservices" />
                <ButtonWhite title="Написать мне" link="#bgcontacts" />
              </div>
            </div>
            <div className="pt-12 ">
              <div className="flex items-center justify-center">
                <p className="text-4xl  text-black">Обо мне</p>
              </div>
              <Horizontaltabl
                title="9"
                description="Лет опыта проведения праздников"
                title2="2000+"
                description2="Удачно проведённых праздников"
                title3="10000+"
                description3="Счастливых отзывов"
              />
            </div>
          </section>
          <section>
            <div className="flex pt-6">
              <div className="rounded-s-xl w-1/2 h-80 bg-[url(/pletnevalong.png)] bg-cover bg-center shrink-0 "></div>
              <div className="rounded-e-xl pe-20 ps-6 py-7 bg-black flex flex-col justify-center">
                <p className="text-3xl pb-5 font-semibold text-white">
                  Ксения Плетнёва
                </p>
                <p className="text-md text-white">
                  Всю свою жизнь я пою. И теперь я не только исполнительница, но
                  и автор. Мои песни есть на популярных музыкальных площадках, а
                  одну из них крутят по радио
                </p>
              </div>
            </div>
            <div id="bgservices" className="pt-12">
              <div className="flex items-center justify-center">
                <p className="text-4xl  text-black">Услуги</p>
              </div>
              <Horizontaltabl
                title="Свадьба"
                description="от 35000р"
                title2="Выпускной"
                description2="от 25000р"
                title3="День рождения"
                description3="от 15000р"
              />

              <div className="px-10">
                <Carousel className="">
                  <CarouselContent>
                    {images.map((images, index) => (
                      <CarouselItem key={index}>
                        <div className="py-20 ">
                          <Image
                            className="rounded-2xl mx-auto"
                            src={images.src}
                            alt={images.alt}
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
              <div className="pt-12 flex flex-row px-20">
                <div className="rounded-xl w-1/3 h-50 bg-[url(/square.png)] bg-cover bg-center shrink-0 me-6 mt-4"></div>
                <div className="flex flex-col my-auto ">
                  <Paragraph
                    title="Почему именно я?"
                    description="Я создаю праздники, основываясь на своем мировосприятии и запросах клиентов. Моя энергия и драйв заряжают всех, при этом я остаюсь интеллигентным и уважаю людей и свою работу."
                  />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div id="bgcontacts" className="w-1/2 pb-12 mx-auto">
              <div className="flex items-center justify-center pt-12">
                <p className="text-4xl  text-black pb-3">Контакты</p>
              </div>
              <ButtonWhite title="VK" link="https://vk.com/id543958430" />
              <ButtonWhite title="Telegram" link="" />
            </div>
          </section>
        </div>
      </div>

      {/* Div, который отображается на маленьких экранах */}
      <div className=" sm:hidden bg-white">
        <section>
          <div className="relative inline-block w-full ">
            <div className="w-full h-120 bg-[url(/pletneva.png)] bg-cover bg-center shrink-0">
              <div className="h-full flex flex-col justify-end items-center pb-10">
                <p className="text-7xl text-white">Ксения</p>
                <p className="text-xl text-white">Ведущая твоих праздников</p>
              </div>
            </div>
            <div className="w-full ">
              <div className=" px-12">
                <p className="text-center text-sm text-black py-8 px-4">
                  Я занимаюсь проведением и организацией самых разных
                  мероприятий. Это могут быть свадьбы, юбилеи, корпоративы,
                  выпускные вечера или просто веселые вечеринки.
                </p>
                <ButtonBlack title="Посмотреть услуги" link="#smservices" />
                <ButtonWhite title="Написать мне" link="#smcontacts" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="pt-12  px-12 w-full">
            <div className="flex items-center justify-center">
              <p className="text-4xl  text-black">Обо мне</p>
            </div>
            <Verticaltabl
              title="9"
              description="Лет опыта проведения праздников"
              title2="2000+"
              description2="Удачно проведённых праздников"
              title3="10000+"
              description3="Счастливых отзывов"
            />
          </div>
          <div>
            <div className=" w-full h-80 bg-[url(/pletnevalong.png)] bg-cover bg-center shrink-0  mt-4"></div>
            <div className="px-12 py-7 bg-black">
              <p className="text-xl pb-2 font-semibold text-white">
                Ксения Плетнёва
              </p>
              <p className="text-sm text-white">
                Всю свою жизнь я пою. И теперь я не только исполнительница, но и
                автор. Мои песни есть на популярных музыкальных площадках, а
                одну из них крутят по радио
              </p>
            </div>
          </div>
        </section>
        <section>
          <div id="smservices" className="px-12">
            <div className="flex items-center justify-center pt-12">
              <p className="text-4xl  text-black">Услуги</p>
            </div>
            <Servicevertical
              title="Свадьба"
              description="от 35000р"
              title2="Выпускной"
              description2="от 25000р"
              title3="День рождения"
              description3="от 15000р"
            />

            <div className="px-10">
              <Carousel className="">
                <CarouselContent>
                  {images.map((images, index) => (
                    <CarouselItem key={index}>
                      <div className="py-20 ">
                        <Image
                          className="rounded-2xl mx-auto"
                          src={images.src}
                          alt={images.alt}
                          width={300}
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
            <div className="pt-12 flex flex-row ">
              <div className="rounded-xl w-35 h-40 bg-[url(/square.png)] bg-cover bg-center shrink-0 me-6 mt-4"></div>
              <div className="flex flex-col">
                <Paragraph
                  title="Почему именно я?"
                  description="Я создаю праздники, основываясь на своем мировосприятии и запросах клиентов. Моя энергия и драйв заряжают всех, при этом я остаюсь интеллигентным и уважаю людей и свою работу."
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div id="smcontacts" className="px-12 pb-12">
            <div className="flex items-center justify-center pt-12">
              <p className="text-4xl  text-black pb-3">Контакты</p>
            </div>
            <ButtonWhite title="VK" link="https://vk.com/id543958430" />
            <ButtonWhite title="Telegram" link="" />
          </div>
        </section>
      </div>
    </div>
  );
}
