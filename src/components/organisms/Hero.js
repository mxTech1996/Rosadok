'use client';

import { dataSite } from '@/data';

export default function Hero() {
  const url = dataSite.image_hero2;
  return (
    <section
      className='text-white py-24 px-6 bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${url})`,
        // add shadow to see the text
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundSize: 'cover',
      }}
    >
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-5xl font-extrabold leading-tight mb-6'>
          {dataSite.subtitle}
        </h1>
        <p className='text-lg max-w-2xl mx-auto leading-relaxed text-white/90'>
          {dataSite.description}
        </p>

        <div className='mt-10'>
          <button className='bg-[#ff5733] hover:bg-[#ff2e00] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition'>
            Start Your Journey →
          </button>
        </div>
      </div>
    </section>
  );
}
