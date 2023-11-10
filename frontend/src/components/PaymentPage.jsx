import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import '../styles/PaymentPage.css'
const PaymentPage = () => {
    const searchQuery=useSearchParams()[0];
    const refNo=searchQuery.get('reference');
    console.log(refNo)
  return (
    <div id='payment_display'>
      <h1>ORDER SUCCESSFULL</h1>
      <p>Reference Number : {refNo}</p>
      <Link to={'/'}><button>Back to Home Page</button></Link>
    </div>
  )
}

export default PaymentPage
