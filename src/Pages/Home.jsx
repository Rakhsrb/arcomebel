import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MapPin, Tag, ThumbsUp, Truck } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export const Home = () => {
  const features = [
    {
      icon: <MapPin className='text-3xl' />,
      title: 'Удобное расположение магазина'
    },
    {
      icon: <Truck className='text-3xl' />,
      title: 'Быстрая доставка'
    },
    {
      icon: <Tag className='text-3xl' />,
      title: 'Низкие цены'
    },
    {
      icon: <ThumbsUp className='text-3xl' />,
      title: 'Гарантия качества'
    },
  ]
  const catalog = [
    {
      to: '/kitchen',
      image: './image/kitchen.png',
      title: 'КУХНИ'
    },
    {
      to: '/guestroom',
      image: './image/guestroom.png',
      title: 'ГОСТИННЫЕ'
    },
    {
      to: '/bedroom',
      image: './image/bedroom.png',
      title: 'СПАЛЬНИ'
    },
    {
      to: '/hool',
      image: './image/coomingroom.png',
      title: 'ПРИХОЖИЕ'
    },
    {
      to: '/coupe',
      image: './image/coupe.png',
      title: 'ШКАФЫ-КУПЕ'
    },
    {
      to: '/babyroom',
      image: './image/babyroom.png',
      title: 'ДЕТСКИЕ'
    },
    {
      to: '/sofa',
      image: './image/sofa.png',
      title: 'ДИВАНЫ'
    },
    {
      to: '/chair',
      image: './image/chair.png',
      title: 'СТОЛЫ И СТУЛЬЯ'
    },
  ]
  const work = [
    {
      image: './image/w1.png',
      title: 'КУХНЯ ГЛЕТЧЕР'
    },
    {
      image: './image/w2.png',
      title: 'ГОСТИННАЯ ДЕНВЕР'
    },
    {
      image: './image/coupe.png',
      title: 'ШКАФЫ-КУПЕ'
    },
    {
      image: './image/babyroom.png',
      title: 'ДЕТСКИЕ'
    },
    {
      image: './image/sofa.png',
      title: 'ДИВАНЫ'
    },
    {
      image: './image/chair.png',
      title: 'СТОЛЫ И СТУЛЬЯ'
    },
  ]

  return (
    <div className='pb-20 px-4'>
      <section className='h-[70vh] mt-[50px]'>
        <div className="container h-full rounded-md overflow-hidden">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-full overflow-hidden">
            <SwiperSlide className='w-full' style={{
              background: "url('./image/bgrasm1.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            </SwiperSlide>
            <SwiperSlide className='w-full' style={{
              background: "url('./image/bgrasm2.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            </SwiperSlide>
            <SwiperSlide className='w-full' style={{
              background: "url('./image/bgrasm3.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className='pt-10 pb-4 text-3xl font-bold'>НАШИ ПРЕИМУЩЕСТВА</h1>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
              features.map((feature, index) => (
                <div key={index} className="p-3 text-[#384685] flex items-center gap-2 bg-[#F4F4F4]">
                  {feature.icon}
                  <p className='text-lg'>{feature.title}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className='pt-10 pb-4 text-3xl font-bold'>КАТАЛОГ</h1>
          <div className="grid gap-2 grid-cols-2 xl:grid-cols-4">
            {
              catalog.map((item, index) => (
                <Link to={item.to} key={index} className="relative overflow-hidden rounded-md">
                  <img className='w-full hover:scale-110' style={{ transition: 'all .3s ease' }} src={item.image} alt={item.title} />
                  <span className='absolute left-0 bottom-0 bg-blue-950 rounded-md text-white p-2 text-[13px]'>{item.title}</span>
                </Link>
              ))
            }
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className='pt-10 pb-4 text-3xl font-bold'>НАШИ РАБОТЫ</h1>
          <div className='grid-gallery'>
            {
              work.map((item, index) => {
                return <div className='grid-item relative overflow-hidden rounded-md' key={index} >
                  <figure className='w-full h-full'>
                    <img src={item.image} className='w-full h-full' alt="" />
                  </figure>
                  <span className='absolute left-0 bottom-0 bg-blue-950 rounded-md text-white p-2 text-[13px]'>{item.title}</span>
                </div>
              })
            }
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="my-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div style={{
              background: "linear-gradient(to left ,rgba(255, 896, 0, 0.432) , rgba(255, 204, 0, 0.55)) , url('./image/coupe.png')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }
            } className="flex flex-col gap-5 p-5 md:p-20 rounded-lg overflow-hidden">
              <h1 className='text-3xl font-bold'>НАШИ КОНТАКТЫ</h1>
              <h3 className='text-xl font-bold'>город Наманган ул. Галаба 14</h3>
              <a className='text-xl font-bold' href="tel: +998950941467">+998950941467</a>
              <div>
                <button className='bg-blue-900 text-white font-bold py-2 px-4 rounded-md'>ЗАДАТЬ ВОПРОС</button>
              </div>
            </div>
            <div className='rounded-lg overflow-hidden'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.5985383025!2d69.11455850954174!3d41.28247993081267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1709640807161!5m2!1sru!2s" width="100%" height="450" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
