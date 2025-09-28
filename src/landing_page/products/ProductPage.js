import React from 'react'
import Hero from './Hero';
import LeftImg from './LeftImg';
import RightImg from './RightImg';
import Univers from './Univers';


function ProductPage() {
  return (
   <div className="product-page">
     <Hero/>
     <LeftImg
       imageURL="media/images/kite.png"
       producName="Kite"
       productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
       tryDemo="Try Demo →"
       learnMore="Learn More →"
       googlePlay="/product1/google-play"
       appStore="/product1/app-store"
     />
     <RightImg
        imageURL="media/images/console.png"
        producName="Console"
        productDesc="A powerful trading console for advanced users, featuring customizable layouts, advanced charting tools, and real-time market data."
        learnMore="Learn More →"
     />
     <LeftImg
       imageURL="media/images/coin.png"
       producName="Coin"
       productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
       tryDemo="Coin →"
       learnMore=""
       googlePlay="/product1/google-play"
       appStore="/product1/app-store"
     />
     
     <RightImg
        imageURL="media/images/kiteconnect.png"
        producName="Kite Connect API"
        productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="Kite Connect →"
     />
     <LeftImg
       imageURL="media/images/varsity.png"
       producName="Varsity mobile"
       productDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
       tryDemo=""
       learnMore=""
       googlePlay="/product1/google-play"
       appStore="/product1/app-store"
     />
     <p className='tech-stack-link'>Want to know more about our technology stack? Check out the <a href="https://zerodha.tech" className="tech-link">Zerodha.tech</a> blog.</p>
     <Univers/>
   </div>
  )
}

export default ProductPage;