import { dataSite } from '@/data';

export default function ServicesGrid() {
  const services = dataSite.services;

  return (
    <section id='services' className='max-w-7xl mx-auto px-6 py-16'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
        {/* Grid of cards */}
        <div className='lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {services.map((item, index) => (
            <div
              key={index}
              className='text-center border border-gray-200 p-6 rounded-lg hover:shadow-lg transition'
            >
              <img
                src={item.image}
                alt={item.title}
                className='w-32 h-32 mx-auto mb-4 rounded-2xl object-cover'
              />
              <h3 className='text-2xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-gray-600 text-sm'>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className='hidden lg:block'>
          <img
            src={dataSite.services[3].image}
            alt='Astrology Reading'
            className='rounded-xl shadow-md object-cover w-full h-full max-h-[600px]'
          />
        </div>
      </div>
    </section>
  );
}
