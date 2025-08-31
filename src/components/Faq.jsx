import React, { useState } from 'react';
import { faqs } from '../constants/faqsdata.js'

function FrequentQuestion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-gray-500 text-base sm:text-lg">
          Get answers to the most common questions about tuduX and how it can help you stay organized.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
              openIndex === index ? 'bg-blue-50 shadow-lg' : 'bg-white hover:shadow-lg'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left flex justify-between items-center p-4 focus:outline-none"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <span className="text-gray-500 text-xl transform transition-transform duration-100">
                {openIndex === index ? '▲' : '▼'}
              </span>
            </button>

            <div
              className={`px-4 pb-4 text-gray-700 transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <p className="mt-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <p className='text-center text-gray-600 mt-10 mb-4'>Still have questions?</p>
        <div className='flex justify-center'>
          <button className='bg-black text-white px-5 py-3 rounded-lg'>Contact Support</button>
        </div>
    </div>
  );
}

export default FrequentQuestion;
