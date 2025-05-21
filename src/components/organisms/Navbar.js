'use client';

import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
// icon cart from react-icons
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  const { products } = useCart();
  return (
    <nav className='text-white px-6 py-4 absolute top-0 left-0 right-0  backdrop-blur-md'>
      <div className='max-w-7xl mx-auto flex justify-between items-center border-b border-white/20 pb-2'>
        <div className='flex gap-6 items-center'>
          <a href='/#intro' className='hover:underline'>
            Intro
          </a>
          <a href='/#about' className='hover:underline'>
            About Us
          </a>
          <a href='/#services' className='hover:underline'>
            Services
          </a>
        </div>

        <img src={dataSite.iconImage} alt='Logo' className='w-10 h-10' />

        <div className='flex gap-6 items-center'>
          <a href='/#shop' className='hover:underline'>
            Products
          </a>
          <a href='/#testimonials' className='hover:underline'>
            Testimonials
          </a>
          <a href='/more-information' className='hover:underline'>
            Contact
          </a>
          <button className='text-2xl relative'>
            {/* count cart products */}
            <span className='absolute -top-4 -right-4 bg-red-500 text-white rounded-full px-2 py-1 text-xs'>
              {products.length}
            </span>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </nav>
  );
}
