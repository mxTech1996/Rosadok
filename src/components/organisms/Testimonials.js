import { dataSite } from '@/data';
import { useState } from 'react';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = dataSite.references;

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const testimonial = testimonials[index];

  return (
    <section
      id='testimonials'
      className='bg-[#2b36b3] py-12 text-white text-center'
    >
      <div className='max-w-4xl mx-auto bg-white text-black px-8 py-12 rounded-lg relative'>
        <h2 className='text-4xl font-bold mb-6'>What Our Clients Say</h2>
        <div className='flex items-start gap-4'>
          <FaQuoteLeft className='text-5xl text-red-500' />
          <p className='text-lg font-medium text-left'>
            {testimonial.description}
          </p>
        </div>
        <p className='mt-6 text-blue-800 font-semibold'>- {testimonial.name}</p>
        <div className='flex justify-end mt-6 gap-4'>
          <button
            onClick={handlePrev}
            className='text-red-500 hover:text-red-600'
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className='text-blue-800 hover:text-blue-900'
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
