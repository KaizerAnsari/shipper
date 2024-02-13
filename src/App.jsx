
import { Component } from 'react'
import './App.css'
import { CheckoutStepper } from './components/stepper'

const CHECKOUT_STEP =[ 
  { 
  name: "Customer Info",
  Component: () => <div>Provide Your Contact Details</div>,
},
{
  name: "Shipping Info",
  Component: () => <div>Enter your Shipping Address</div>,
},
{
  name: "Payment",
  Component: () => <div>Complete your Payment For your Order</div>,

},
{
  name: "Delivered",
  Component: () => <div>Your Order has beem Delivered</div>,
},
];
function App() {
 

  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEP}/>
      </div>
    
   
   
  )
}

export default App
