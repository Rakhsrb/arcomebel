import {
  House,
  MagnifyingGlass,
  PhoneCall,
  ShoppingCart,
  Suitcase,
  User,
} from "@phosphor-icons/react";
import { Heart } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const Nav_link = [
    {
      to: "",
      title: "Кухни",
    },
    {
      to: "",
      title: "Гостинные",
    },
    {
      to: "",
      title: "Спальни",
    },
    {
      to: "",
      title: "Прихожие",
    },
    {
      to: "",
      title: "Шкафы-купе",
    },
    {
      to: "",
      title: "Детские",
    },
    {
      to: "",
      title: "Диваны",
    },
  ];
  return (
    <>
      <header className="orta:h-[80px] h-[60px] px-2">
        <div className="container h-full flex items-center justify-between">
          <Link>
            <img className="logo w-[130px]" src="./image/logo.png" alt="" />
          </Link>
          <div className="orta:flex hidden items-center justify-between border-2 py-2 px-2 rounded-md border-green-700">
            <input type="text" placeholder="Поиск" className="outline-none" />
            <MagnifyingGlass />
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall />
            <a href="tel: +998950941467">+998 (95) 094-14-67</a>
          </div>
          <div className="orta:flex hidden gap-5">
            <div className="flex flex-col items-center">
              <User size={25} />
              <span>Войти</span>
            </div>
            <div className="flex flex-col items-center relative">
              <span className="absolute right-[-5px] top-[-5px] bg-red-500 text-white flex items-center justify-center px-2 rounded-md">
                0
              </span>
              <Heart size={25} />
              <span>Избранное</span>
            </div>
            <div className="flex flex-col items-center relative">
              <span className="absolute right-[-5px] top-[-5px] bg-green-500 text-white flex items-center justify-center px-2 rounded-md">
                0
              </span>
              <ShoppingCart size={25} />
              <span>Корзина</span>
            </div>
          </div>
        </div>
      </header>
      <div className="orta:hidden block  fixed right-0 bottom-0 w-full h-[60px] border-t py-2">
        <div className="flex h-full items-center justify-evenly">
          <Link className="flex flex-col items-center">
            <House size={25} />
            <span>Главный</span>
          </Link>
          <Link className="flex flex-col items-center">
            <Suitcase size={25} />
            <span>Каталог</span>
          </Link>
          <Link className="flex flex-col items-center relative">
            <span className="absolute right-0 top-0 text-[12px] bg-red-500 text-white flex items-center justify-center px-1 rounded-md">
              0
            </span>
            <Heart size={25} />
            <span>Избранное</span>
          </Link>
          <Link className="flex flex-col items-center relative">
            <span className="absolute right-0 top-0 text-[12px] bg-green-500 text-white flex items-center justify-center px-1 rounded-md">
              0
            </span>
            <ShoppingCart size={25} />
            <span>Корзина</span>
          </Link>
          <Link className="flex flex-col items-center">
            <User size={25} />
            <span>Войти</span>
          </Link>
        </div>
      </div>
      <nav className="orta:block hidden bg-[#A8D1E7]">
        <div className="container">
          <ul className="flex justify-evenly py-2">
            {Nav_link.map((item, index) => (
              <li key={index}>
                <Link
                  className="hover:bg-blue-950 hover:text-white p-2"
                  to={item.to}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
