import {
  House,
  MagnifyingGlass,
  PhoneCall,
  ShoppingCart,
  User,
} from "@phosphor-icons/react";
import { Heart } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const Nav_link = [
    {
      to: "/kitchen",
      title: "Кухни",
    },
    {
      to: "/guestroom",
      title: "Гостинные",
    },
    {
      to: "/bedroom",
      title: "Спальни",
    },
    {
      to: "/hool",
      title: "Прихожие",
    },
    {
      to: "/coupe",
      title: "Шкафы-купе",
    },
    {
      to: "/babyroom",
      title: "Детские",
    },
    {
      to: "sofa",
      title: "Диваны",
    }
  ];
  const basketCount = useSelector(state => state.common.cart)

  return (
    <>
      <header className="sticky left-0 top-0 bg-white z-50 orta:h-[80px] h-[60px] px-2">
        <div className="container h-full flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link to={'/'}>
              <img className="logo w-[130px]" src="./image/logo.png" alt="" />
            </Link>
            <div className="flex items-center gap-2">
              <PhoneCall />
              <a href="tel: +998950941467">95 094-14-67</a>
            </div>
          </div>
          <Link to={'/search'} className="orta:hidden flex flex-col items-center">
            <MagnifyingGlass size={25} />
          </Link>
          <div className="orta:flex hidden gap-5">
            <Link to={'/search'} className="flex flex-col items-center">
              <MagnifyingGlass size={25} />
              <span>Поиск</span>
            </Link>
            <Link to={'/user'} className="flex flex-col items-center">
              <User size={25} />
              <span>Войти</span>
            </Link>
            <div className="flex flex-col items-center relative">
              <span className="absolute right-[-5px] top-[-5px] bg-red-500 text-white flex items-center justify-center px-2 rounded-full border-2 border-white">
                0
              </span>
              <Heart size={25} />
              <span>Избранное</span>
            </div>
            <Link to="/cart" className="flex flex-col items-center relative">
              {basketCount.length > 0 ? <span className="absolute right-[-5px] top-[-5px] bg-green-500 text-white flex items-center justify-center px-2 rounded-full border-2 border-white">
                {basketCount.length}
              </span> : ''}
              <ShoppingCart size={25} />
              <span>Корзина</span>
            </Link>
          </div>
        </div>
      </header>
      <div className="orta:hidden block z-50 bg-white fixed right-0 bottom-0 w-full h-[60px] border-t py-2">
        <div className="flex h-full items-center justify-evenly">
          <Link to={'/'} className="flex flex-col items-center">
            <House size={25} />
            <span className="text-[14px]">Главный</span>
          </Link>
          <Link className="flex flex-col items-center relative">
            <span className="absolute w-[20px] h-[20px] right-0 top-0 text-[12px] bg-red-500 text-white flex items-center justify-center px-1 rounded-full border-2 border-white">
              0
            </span>
            <Heart size={25} />
            <span className="text-[14px]">Избранное</span>
          </Link>
          <Link to={'/cart'} className="flex flex-col items-center relative">
            {basketCount.length > 0 ? <span className="absolute w-[20px] h-[20px] right-0 top-0 bg-green-500 text-white flex items-center justify-center px-2 rounded-full border-2 border-white">
              {basketCount.length}
            </span> : ''}
            <ShoppingCart size={25} />
            <span className="text-[14px]">Корзина</span>
          </Link>
          <Link to={'/user'} className="flex flex-col items-center">
            <User size={25} />
            <span className="text-[14px]">Войти</span>
          </Link>
        </div>
      </div>
      <nav className="orta:block hidden bg-[#A8D1E7]">
        <div className="container">
          <ul className="flex justify-evenly py-2">
            {Nav_link.map((item, index) => (
              <li key={index}>
                <NavLink
                  className="hover:bg-blue-950 hover:text-white p-2"
                  to={item.to}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
