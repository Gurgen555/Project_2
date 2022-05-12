import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minusCount, selectCount, setCount } from '../../Redux/CounterSlice/counterSlice'
import { selectProd } from '../../Redux/productSlice/productSlice'
import '../Modal/Modal.scss'
export default function ModalMenu() {
    const count = useSelector(selectCount)
    const prods = useSelector(selectProd);
    const newProd = prods?.slice(3,4);
    const dispatch = useDispatch()
    function minus(){
        if(count < 2){
            count = 1
        }
        dispatch(minusCount())
    }
  return (
    <div className='modalDiv'>
       {newProd?.map(item => {
           return <>
           <div className='imgModal'>
             <img  src={item.image} />
           </div>
           <div className='menuModal'>
               <h1>Clubber Tee</h1>
               <br></br>
               <p>The only prerequisite to join the gang is your love for bikes and a passion for the twist of the wrist. 
               Jump on a bike, free your mind and the rest will follow. <a className='spanLearn'>Learn More</a></p>
               
               <h3 className='price'>${item.price}</h3>
               <hr className='line'></hr>
               <p className='size'>Size</p>
               <div className='sizeFlex'>
                   <div className='sizeDiv sizeDiv1'>M</div>
                   <div className='sizeDiv'>L</div>
                   <div className='sizeDivXl'>XL</div>
               </div>
               <h2 className='colorTitle'>Color</h2>
               <div className='colorDiv'>
                   <div className='color col1'></div>
                   <div className='color'></div>
               </div>
               <div className='quantity'>
                   <h2>Quantity</h2>
                   <div className='countDiv'>
                       <button className='countBtn' onClick={minus}>-</button>
                       <div className='countSpan'>
                           <p >{count}</p>
                       </div>
                       <button className='countBtn' onClick = {() => dispatch(setCount())}>+</button>
                    </div>
               </div>
               <div className='addDiv'>
                   <div className='cartDiv'>ADD TO CART <span className='cartSpan'>+</span></div>
                   <div className='buyDiv'>BUY IT NOW</div>
               </div>
           </div>
           </>
       })}
        
    </div>
  )
}
