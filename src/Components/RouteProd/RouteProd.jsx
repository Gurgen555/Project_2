import "../RouteProd/RouteProd.scss"
import React from 'react'

export default function RouteProd() {
  return (
    <div className='modalDiv'>
        <div className='imgModal'>
                                                                                                                                
        </div>
        <div className='menuModal'>
            <h1>Clubber Tee</h1>
            <br></br>
            <p>The only prerequisite to join the gang is your love for bikes and a passion for the twist of the wrist. 
            Jump on a bike, free your mind and the rest will follow. <span className='spanLearn'>Learn More</span></p>
            
            <span className='price'>$</span>
            <hr className='line'></hr>
            <p>Size</p>
            <div className='sizeFlex'>
                <div className='sizeDiv'></div>
                <div className='sizeDiv'></div>
                <div className='sizeDiv'></div>
            </div>
            <h2 className='colorTitle'>Color</h2>
            <div className='colorDiv'>
                <div className='color'></div>
                <div className='color'></div>
            </div>
            <div className='quantity'>
                <h2>Quantity</h2>
                <div className='countDiv'>
                    <button className='countBtn' onClick={minus}>-</button>
                    <div className='countSpan'><p>{count}</p></div>
                    <button className='countBtn' onClick = {() => dispatch(setCount())}>+</button>
            </div>
            </div>
            <div className='addDiv'>
                <div className='cartDiv'>ADD TO CART <span className='cartSpan'>+</span></div>
                <div className='buyDiv'>BUY IT NOW</div>
            </div>
        </div>
    </div>
  )
}
