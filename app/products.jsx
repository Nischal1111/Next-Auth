"use client"
import React from 'react'

const ProductsNavbar = () => {
  return (
    <main>
        <nav className='products-navbar flex items-center justify-center gap-[22px]' >
            <div className='relative'>
                <p className='text-[14px] leading-[21px] font-medium tracking-[-0.025em]'>BYD Dolphins</p>
                <span className='product-nav-line'></span>
            </div>
            <div className='relative'>
                <p className='text-[14px] leading-[21px] font-medium tracking-[-0.025em]' style={{color:"#9D9D9D"}}>Specifications</p>  
            </div>
            <div className='relative'>
                <p className='text-[14px] leading-[21px] font-medium tracking-[-0.025em]' style={{color:"#9D9D9D"}}>Compare</p>
            </div>
            <div className='relative'>
                <p className='text-[14px] leading-[21px] font-medium tracking-[-0.025em]' style={{color:"#9D9D9D"}}>User Reviews</p>
            </div>
        </nav>
    </main>
  )
}

export default ProductsNavbar