import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer className='bg-[#384685;] px-6 pt-6 md:pb-6 pb-24 text-white' >
                <div className="container">
                    <div className="flex flex-col gap-5">
                        <h3><a href="tel: +998 950941467 ">+998 95 094 14 67</a></h3>
                        <p><span>Время работы:</span> с 10:00 до 19:00</p>
                        <p><span>Адрес:</span> город Наманган ул. Галаба 14</p>
                        <p><span>Почта:</span> mebelarko@mail.ru</p>
                    </div>
                    <div className="bottom mt-5 flex justify-between">
                        <h1>© Все права защищены</h1>
                        <h1 className="">created by bootcamp-8</h1>
                    </div>
                </div>
            </footer>
        </>
    )
}
