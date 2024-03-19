import { Heart, Star } from '@phosphor-icons/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeLike  , addToSave} from '../CommonSlicer'

export const Saved = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.common.likes)
    return (
        <>
            <section className='p-4 md:py-20'>
                <div className="container">
                    <h1 className='text-3xl my-3'>Избранное</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
                        {
                            data?.map((item, index) => (
                                <div className=" card flex flex-col justify-between rounded-md overflow-hidden" key={index}>
                                    <Link to={`/${item.id}`} className='w-full'><img src={item.image} className='w-full' alt={item.title} /></Link>
                                    <div className='p-3 flex flex-col gap-5 justify-between h-full'>
                                        <p className='text-2xl'>{item.title}</p>
                                        <div className='flex items-center justify-between'>
                                        <button onClick={() => dispatch(removeLike(item))} >{item.liked ? <Star className='text-3xl' /> : <Heart className='text-3xl text-rose-400' />}</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
