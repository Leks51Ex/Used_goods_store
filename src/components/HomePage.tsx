import { ProductCard } from './ProductCard';
import type { Product } from '../data/products';
import { products } from '../data/products';
import mainPicture from "../assets/main_picture.svg";
import infoCard1 from "../assets/info_card_1.png";
import infoCard2 from "../assets/info_card_2.png";
import infoCard3 from "../assets/info_card_3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type Page = 'home' | 'catalog';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onProductClick: (productId: string) => void;
}

export function HomePage({ onNavigate, onProductClick }: HomePageProps) {
  return (
    <main className="flex-1 bg-bg-primary">
      <section className="relative overflow-hidden">
        <div className="max-w-[1840px] mx-auto px-26 py-6 pt-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Продажа Б/У оборудования для коммерческого судоходства
              </h1>
              <p className="text-text-secondary text-lg mb-8 max-w-xl">
              тут будет какой то небольшой текстик где мы напишем, что хоть оборудование и бушное, оно все равно очень хорошее полностью рабочее и с ценой приятной
              </p>

<button
onClick={() => onNavigate('catalog')}
className="mt-4 px-6 py-3 bg-accent text-white rounded-4xl font-semibold hover:bg-accent-hover transition-colors flex items-center gap-4 group">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />


  </svg>
  <span>Перейти в каталог</span>
</button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
              <div className="w-full max-w-[700px]">
  <img
    src={mainPicture}
    alt="Laptop"
    className="w-full h-auto"
  />
</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-bg-secondary">
  <div className="max-w-[1640px] mx-auto mt-30">

    <div className="flex flex-col-reverse lg:flex-row items-start gap-12">

      <div className="lg:w-auto w-full">
        <div className="hidden lg:flex gap-4">
          <img
            src={infoCard1}
            alt=""
            className="w-48 h-95 object-cover rounded-2xl"
          />
          <img
            src={infoCard3}
            alt=""
            className="w-48 h-95 object-cover rounded-2xl"
          />
          <img
            src={infoCard2}
            alt=""
            className="w-48 h-95 object-cover rounded-2xl"
          />
        </div>

        <div className="lg:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={16}
            className="w-full max-w-[280px] mx-auto"
          >
            <SwiperSlide>
              <img
                src={infoCard1}
                alt=""
                className="w-full h-64 object-cover rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={infoCard3}
                alt=""
                className="w-full h-64 object-cover rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={infoCard2}
                alt=""
                className="w-full h-64 object-cover rounded-2xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="max-w-xl text-left ">
  <h2 className="!text-white !font-light">
    А ещё интерактивные прототипы лишь добавляют фракционных разногласий и указаны как претенденты на роль ключевых факторов. Ясность нашей позиции очевидна: высокое качество позиционных исследований позволяет выполнить важные задания по разработке новых предложений. Предварительные выводы неутешительны: современная методология разработки требует от нас анализа распределения внутренних резервов и ресурсов.
  </h2>
<div className='h-[30px]'></div>
  <h2 className="!text-white !font-light">
    Задача организации, в особенности же перспективное планирование, не оставляет шанса для дальнейших направлений развития. Следует отметить, что семантический разбор внешних противодействий однозначно определяет каждого участника как способного принимать собственные решения касаемо вывода текущих активов. Имеется спорная точка зрения, гласящая примерно следующее:
  </h2>


  <div className="flex gap-4 mt-4">
  <span className="px-4 py-2 text-white rounded-full text-sm border-2 border-white">
    Качество
  </span>
  <span className="px-4 py-2 text-white rounded-full text-sm border-2 border-white">
    Надежность
  </span>
  <span className="px-4 py-2 text-white rounded-full text-sm border-2 border-white">
    Гарантия
  </span>
</div>
</div>
    </div>

  </div>
</section>

      <section className="py-16 border-t border-bg-card">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
<h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-left">
  Каталог поддержанного <br /> оборудования
</h1>
            </div >
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product: Product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => onProductClick(product.id)}
              />
            ))}
          </div>
          <button
  onClick={() => onNavigate('catalog')}
  className="mt-10 text-black border-b-1 border-black pb-1"
>
  <span>Перейти в каталог</span>
</button>
        </div>
      </section>
    </main>
  );
}
