import { Heart, Star } from '@phosphor-icons/react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export const Search = () => {
    const data = useSelector(state => state.common.data)
    const [search, setSearch] = useState("");
    const SearchList = (e) => {
        setSearch(e.target.value);
    };
    return (
        <section className='min-h-screen p-3 md:p-5'>
            <div className="container">
                <input
                    type="text"
                    placeholder='Поиск'
                    className='border-2 w-full px-2 py-2 md:text-3xl md:py-4 md:px-3 border-cyan-600 rounded-lg'
                    onChange={(e) => SearchList(e)}
                />
                {search.length == 0 ?
                    <div className='flex h-[30vh] items-center justify-center'>
                        <h1 className='text-2xl'>Поиск.. Стол для кабинет</h1>
                    </div> : <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
                        {data?.filter((fil) => fil.title.includes(search)).map((item, index) => (
                            <div className=" card flex flex-col justify-between rounded-md overflow-hidden" key={index}>
                                <Link to={`/${item.id}`} className='w-full p-2'><img src={item.image} className='w-full' alt={item.title} /></Link>
                                <div className='p-3 flex flex-col gap-5 justify-between h-full'>
                                    <p className='text-2xl'>{item.title}</p>
                                    <div className="flex justify-between">
                                        <h3 className='flex gap-2 items-center'><del className='text-red-400' >{item.price}$</del> <span className='text-green-500'>{Math.round(item.price - (item.price / 100 * 25))}$</span></h3>
                                        {
                                            item.amount > 0 ?
                                                <h2 className='text-blue-500 font-bold'>В наличии ({item.amount})</h2>
                                                : <h2 className='text-red-500'>Нет в наличии</h2>
                                        }
                                    </div>
                                    <div className='flex b items-center justify-between'>
                                        <Link to={`/${item.id}`} className='border-2 border-blue-950 px-4 py-2 rounded-md hover:bg-blue-950 hover:text-white'>КУПИТЬ</Link>
                                        <button>{item.liked ? <Star className='text-3xl' /> : <Heart className='text-3xl text-rose-400' />}</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>}

            </div>
        </section>
    )
}



