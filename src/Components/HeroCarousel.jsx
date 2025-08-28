// src/components/HeroCarousel.jsx
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import women_banner from '../assets/women_banner.avif'

export default function HeroCarousel() {
  const slides = [
   { id: 1, img: 'https://cdni.iconscout.com/illustration/premium/thumb/60-percent-discount-sale-illustration-download-in-svg-png-gif-file-formats--promo-card-colorful-banner-label-pack-e-commerce-shopping-illustrations-1555923.png?f=webp' },
    { id: 2, img: 'https://static.vecteezy.com/system/resources/previews/004/299/835/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg' },
    { id: 3, img: 'https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?semt=ais_hybrid&w=740' },
    { id: 4, img: 'https://static.vecteezy.com/system/resources/previews/002/006/774/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg' },
  ]

  return (
    <div className="w-full bg-green-400">
      <div className="w-full h-[300px] md:h-[500px] p-5">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000 }}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.img}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
