import { Heart, Star } from '@phosphor-icons/react'
import { useSelector } from 'react-redux'

export const Coupe = () => {
    const data = useSelector(state => state.common.coupe)
  return (
    <section>
    <div className="container">
      <h1 className='text-3xl my-3'>ШКАФЫ-КУПЕ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {
          data?.map((item, index) => (
            <div className="flex flex-col justify-between " key={index}>
              <img src={item.image} className='w-full' alt={item.title} />
              <div className='p-3 flex flex-col gap-5 justify-between h-full'>
                <p className='text-2xl'>{item.title}</p>
                <h3 ><del className='text-slate-400 text text-2xl' >{item.price}</del> <span className='text-3xl'>{Math.round(item.price - (item.price / 100 * 25))}</span></h3>
                <div className='flex b items-center justify-between'>
                  <button className='border-2 border-blue-950 px-4 py-2 rounded-md'>КУПИТЬ</button>
                  <button>{item.liked ? <Star className='text-3xl' /> : <Heart className='text-3xl' />}</button>
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
