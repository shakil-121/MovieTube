
import React, { useEffect, useState } from 'react';
import {getShoppingCart} from "../../../Utilites/LocalStorage"
import BookingCard from './BookingCard';
const Booking = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, [products]);

    useEffect(() => {
      const storedcart = getShoppingCart(); 
   
      // to get the product by id into LocalStorage
      // step 1 : get id
      let saveCart = [];
      for (const id in storedcart) { 
     
        //step 2 get the product by using id
        let addedProduct = products.find(product=> product.show.id == id);
       
        //step 3 quntity of the product
        if (addedProduct) {
          const quantity = storedcart[id];
          addedProduct.quantity = quantity;
          // step 4 add the addedProduct to the save cart
          saveCart.push(addedProduct);  

        }
        // console.log('added product',addedProduct);
      }
      //  step 5  set to cart
      setCart(saveCart);
    }, [products]);
  const [cart,setCart]=useState([]) 
  console.log(cart); 
   

    return (
        <div>
            <div className="text-white d-flex align-items-center justify-content-center" style={{backgroundColor:"red",height:"200px"}}>
               <h1>MY BOOKING</h1> 
               </div>
               <div className='container'>
                { 
                cart.map((movie)=><BookingCard
                movie={movie} 
                cart={cart} 
                setCart={setCart}
                >

                </BookingCard>)
                }
               </div>
           
        </div>
    );
};

export default Booking;