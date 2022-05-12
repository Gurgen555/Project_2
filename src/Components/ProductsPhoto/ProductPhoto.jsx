import React from 'react'
import imgProd from "../../Photos/imgProd.png"
import "../ProductsPhoto/ProductPhoto.scss"

export default function ProductPhoto() {
  return (
    <div className='photoProd'>
        <img src={imgProd}/>
    </div>
  )
}
