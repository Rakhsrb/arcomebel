import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { cartdecrement, cartincrement, removeFromCart } from '../CommonSlicer';
import { Trash } from '@phosphor-icons/react';

export const Cart = () => {
    const data = useSelector(state => state.common.cart)
    const dispatch = useDispatch()
    return (
        <section className='bg-slate-200 min-h-screen px-2 py-14'>
            <div className="container">
                <h1 className='text-3xl mb-5 '>Корзина</h1>
            </div>
            <div className='container basketGrid gap-5'>
                <div className='flex flex-col gap-4'>
                    {
                        data.length < 1 ? <div>
                            <h1>No data</h1>
                            <Link to={'/'}>Go To Shop</Link>
                        </div> :
                            data.map((item, index) => (
                                <div key={index} className="flex flex-col md:flex-row bg-white md:p-5 relative">
                                    <div onClick={() => dispatch(removeFromCart(item))} className="flex bg-red-400 text-white absolute right-0 px-4 py-1 top-0 cursor-pointer">
                                        Удалить
                                        <Trash size={25} />
                                    </div>
                                    <figure className='w-full md:w-auto'>
                                        <img className='w-full md:w-auto' src={item.image} alt={item.title} />
                                    </figure>
                                    <div className="flex flex-col justify-between gap-3 md:gap-0 p-3">
                                        <h3>{item.title}</h3>
                                        <h2 className='flex gap-5'>Размеры: {item.size.map((item, index) => <span key={index}>{item}</span>)}</h2>
                                        <div className="flex items-center gap-5">
                                            <button className='text-xl w-[30px] h-[30px] bg-red-400 text-white rounded-md flex items-center justify-center' onClick={() => dispatch(cartdecrement(item))}>-</button>
                                            <h3 className='text-xl'>{item.count}</h3>
                                            <button className='text-xl w-[30px] h-[30px] bg-green-400 text-white rounded-md flex items-center justify-center' onClick={() => dispatch(cartincrement(item))}>+</button>
                                        </div>
                                        <h1>Сумма:  {item.count * item.price}$</h1>
                                    </div>
                                </div>
                            ))
                    }
                </div>
                <div className="flex flex-col ">
                    <h3>Обшая сумма: {data.length > 1 ? "" : "0$"}</h3>
                </div>
            </div>
        </section>
    )
}
