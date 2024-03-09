import { Heart, Star } from '@phosphor-icons/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Sofa = () => {
    const api = useSelector(state => state.common.data)
    const data = api.filter(item => item.type == 'sofa')
    return (
        <section className='py-20'>
            <div className="container">
                <h1 className='text-3xl my-3'>Диваны</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
                    {
                        data?.map((item, index) => (
                            <div className=" card flex flex-col justify-between rounded-md overflow-hidden" key={index}>
                                <Link to={`/${item.id}`} className='w-full'><img src={item.image} className='w-full' alt={item.title} /></Link>
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
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
