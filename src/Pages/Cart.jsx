import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartdecrement, cartincrement, removeFromCart } from '../CommonSlicer';
import { Trash } from '@phosphor-icons/react';
import Swal from 'sweetalert2'; // Import Swal from sweetalert2

export const Cart = () => {
    const data = useSelector(state => state.common.cart);
    const dispatch = useDispatch();
    const subtotal = data.reduce((acc, item) => acc + (item.price * item.count), 0);

    const handleRemoveItem = item => {
        Swal.fire({
            title: 'Вы точно хотите удалить?'   ,
            text: 'У вас не получиться вернуть назад!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#07bc0c',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Да удалить!',
        }).then(result => {
            if (result.isConfirmed) {
                dispatch(removeFromCart(item));
                Swal.fire('Товар был удален успешно!', 'Продолжать покупки', 'success');
            }
        });
    };

    return (
        <section className='bg-slate-100 min-h-screen px-2 py-14'>
            <div className='container'>
                <h1 className='text-3xl mb-5'>Корзина</h1>
            </div>
            <div className='container basketGrid gap-5'>
                <div className='flex flex-col gap-4'>
                    {data.length < 1 ? (
                        <div>
                            <h1>No data</h1>
                            <Link to={'/'}>Go To Shop</Link>
                        </div>
                    ) : (
                        data.map((item, index) => (
                            <div key={index} className='flex flex-col md:flex-row bg-slate-50 rounded-md md:p-5 relative'>
                                <div className='items-center text-sm flex bg-red-400 text-white absolute right-0 px-2 py-1 top-0 cursor-pointer rounded-md' onClick={() => handleRemoveItem(item)}>
                                    Удалить <Trash size={15} />
                                </div>
                                <figure className='w-full md:w-auto'>
                                    <img className='w-full md:w-auto rounded-md' src={item.image} alt={item.title} />
                                </figure>
                                <div className='flex flex-col justify-between gap-3 md:gap-0 p-3'>
                                    <h3 className='text-3xl'>{item.title}</h3>
                                    <h4 className='text-blue-500'>в наличии ({item.amount})</h4>
                                    <h2 className='flex gap-5'>Размеры: {item.size.map((size, idx) => <span key={idx}>{size}</span>)}</h2>
                                    <div className='flex items-center gap-5'>
                                        <button className='text-xl w-[30px] h-[30px] bg-red-400 text-white rounded-md flex items-center justify-center' onClick={() => dispatch(cartdecrement(item))}>-</button>
                                        <h3 className='text-xl'>{item.count}</h3>
                                        <button className='text-xl w-[30px] h-[30px] bg-green-400 text-white rounded-md flex items-center justify-center' onClick={() => dispatch(cartincrement(item))}>+</button>
                                    </div>
                                    <h1>Сумма: {item.count * item.price}$</h1>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className='flex flex-col gap-5 bg-slate-50 p-5'>
                    <h3 className='text-3xl'>Общая сумма: {data.length > 0 ? `${subtotal}$` : '0$'}</h3>
                    <button className='bg-red-400 text-2xl text-white rounded-md p-2'>Заказать</button>
                </div>
            </div>
        </section>
    );
};