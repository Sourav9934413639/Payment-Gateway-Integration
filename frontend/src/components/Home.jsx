import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import Items from './Items';
import axios from 'axios'
import pic from '../assets/pic.jpeg'
const Home = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data)=>{
            console.log(data.products)
            setData(data.products);
        })
        .catch((err)=>console.log(err))
    },[])
    const checkoutHandler=async(amount)=>{
      try {
        const {data:{key}}=await axios.get("http://localhost:4000/getKey");
        const {data:{order}}=await axios.post("http://localhost:4000/api/checkout",{amount})
        var options = {
          key, // Enter the Key ID generated from the Dashboard
          amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: order.currency,
          name: "E-commerce",
          description: "Test Transaction",
          image: pic,
          order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          callback_url: "http://localhost:4000/api/paymentVerification",
          prefill: {
              name: "Sourav Kumar",
              email: "sourav9934413639@gmail.com",
              contact: "7488164548"
          },
          notes: {
              address: "Razorpay Corporate Office"
          },
          theme: {
              color: "#427D9D"
          }
      };
      const razor = new window.Razorpay(options);
      razor.open();
     }
      catch (error) {
        console.log(error)
      }
    }
  return (
    (!data)? 'Loading...':(
    <div id='container'>
       {
            data.map((item)=><Items key={item.id} 
            title={item.title}
            desc={item.description}
            thumbnail={item.thumbnail}
            price={item.price}
            checkout={checkoutHandler}
            />)
       }
    </div>
    )
  )
}

export default Home
