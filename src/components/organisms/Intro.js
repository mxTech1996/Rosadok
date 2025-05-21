import { dataSite } from '@/data';

export default function Intro() {
  return (
    <section
      id='intro'
      className='relative bg-[#262FDF] text-white overflow-hidden py-20'
    >
      {/* Estrellas opcionales */}
      <div className="absolute inset-0 bg-[url('/images/stars.png')] bg-cover opacity-20 pointer-events-none" />

      {/* Decorativo superior e inferior */}
      <div className="absolute top-0 left-0 w-full h-12 bg-[url('/images/astro-edge-top.svg')] bg-repeat-x bg-top z-10" />
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[url('/images/astro-edge-bottom.svg')] bg-repeat-x bg-bottom z-10" />

      <div className='relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
        {/* Illustration */}
        <div className='flex justify-center'>
          <img
            src={dataSite.image_hero}
            alt='Astrology Hand'
            className='w-64 md:w-80'
          />
        </div>

        {/* Text */}
        <div>
          <h2 className='text-3xl md:text-4xl font-bold leading-tight mb-4'>
            Discover Strategic Insights with Our Professional, Scientific &
            Technical Consulting Services
          </h2>
          <p className='text-sm md:text-base text-white/90 mb-4'>
            With decades of combined expertise, our consultants specialize in
            delivering evidence-based solutions across industries such as
            engineering, environmental science, data analytics, architecture,
            and research & development. We combine scientific rigor with
            practical experience to help you solve complex challenges.
          </p>
          <p className='text-sm md:text-base text-white/90 mb-6'>
            Our tailored strategies empower organizations to innovate, comply
            with regulatory standards, optimize operations, and gain competitive
            advantages in a rapidly evolving landscape. Whether you&#39;re a
            government entity, private firm, or research institution — we
            provide the clarity and guidance needed to succeed.
          </p>
          <button className='bg-[#EF5E4A] hover:bg-[#e74c3c] transition text-white font-semibold px-6 py-3 rounded-full'>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
