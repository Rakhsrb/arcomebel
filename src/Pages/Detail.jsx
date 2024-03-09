import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const Detail = () => {
    const { id } = useParams()
    const cart = useSelector(state => state.common.cart)
    const data = useSelector(state => state.common.data)
    const product = data.filter(pr => pr.id == id)
    const item = product[0]
    return (
        <div>

            <img src={item.image} alt="" />
            <h1>{item.title}</h1>
        </div>
    )
}
