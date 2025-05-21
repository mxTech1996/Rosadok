import { FaShieldAlt, FaCertificate, FaTools } from 'react-icons/fa';
import { MdOutlineChecklist } from 'react-icons/md';

export default function About() {
  return (
    <section id='about' className='max-w-7xl mx-auto px-4 py-16 grid gap-12'>
      {/* Top Icons */}
      <div className='flex flex-col md:flex-row justify-between gap-8 text-center md:text-left'>
        <div className='flex items-start gap-4'>
          <FaShieldAlt className='text-3xl text-indigo-600 mt-1' />
          <div>
            <h3 className='text-xl font-bold'>Confidentiality</h3>
            <p className='text-gray-600 text-sm'>
              All client data and project details are treated with strict
              confidentiality and professionalism.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-4'>
          <FaCertificate className='text-3xl text-indigo-600 mt-1' />
          <div>
            <h3 className='text-xl font-bold'>Results-Oriented</h3>
            <p className='text-gray-600 text-sm'>
              We guarantee actionable outcomes and measurable insights in every
              engagement.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-4'>
          <FaTools className='text-3xl text-indigo-600 mt-1' />
          <div>
            <h3 className='text-xl font-bold'>Specialized Expertise</h3>
            <p className='text-gray-600 text-sm'>
              We only engage in technical or scientific matters where we possess
              verified proficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='grid md:grid-cols-2 gap-10 items-start'>
        <div>
          <h2 className='text-3xl font-bold mb-4 leading-tight'>
            We Specialize In Professional, Scientific, And Technical Consulting
          </h2>
          <p className='text-gray-700 mb-4'>
            Our consulting services are built on a foundation of empirical
            knowledge, industry best practices, and strategic planning. We
            provide expert insights tailored to organizations seeking to
            innovate, optimize, and grow.
          </p>
          <p className='text-gray-700'>
            From data-driven decision-making to research and development
            advising, we are committed to empowering businesses through highly
            specialized and ethical consultancy.
          </p>
        </div>

        {/* Card */}
        <div className='bg-indigo-800 text-white rounded-lg p-6 shadow-xl'>
          <h3 className='text-2xl font-bold flex items-center gap-2 mb-4'>
            <MdOutlineChecklist className='text-3xl' />
            What We Offer
          </h3>
          <ul className='space-y-3 text-white/90 text-sm pl-4 list-disc'>
            <li>Scientific and technical research consulting</li>
            <li>Project feasibility and risk analysis</li>
            <li>Regulatory and compliance advisory</li>
            <li>Engineering and IT system audits</li>
            <li>Innovation and R&D planning</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
