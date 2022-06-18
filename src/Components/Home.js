import React from 'react'
import DATA from './CartData'
import Hoc from '../Hocs/Hoc'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'

const Home = () => {
  const cart =  useSelector((state) => state.cart);
  const dispatch = useDispatch();

const cartItem = (item) => {
        return (
            <div className="card mb-4 py-4 " key={item.id} style={{ width: '18rem' }}>
                <img src={item.img} className="card-img-top" alt={item.title} height='200px' />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className='lead '>Price : {item.Price}</p>
                    <p>{item.Desc}</p>
                     {
                        cart.cart.find((product) => product.id === item.id)?(
                            <button className='btn btn-danger w-100 disabled'>Added</button>
                        ) : (
                            <button className='btn btn-primary w-100' onClick={() =>{
                                dispatch(
                                    addToCart({
                                        id : item.id,
                                        title : item.title,
                                        Price : item.Price,
                                        image : item.img,
                                        Desc : item.Desc,
                                        quantity :1,
                                    })
                                )
                             }}>Add To Cart</button>
                        )
                     }
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>PRODUCTS</h2>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {DATA.map(cartItem)}
                </div>
            </div>
        </>
    )
}

export default Hoc(Home)