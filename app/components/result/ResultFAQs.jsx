"use client"

import { useState } from "react"

export default function ResultFAQs() {
  const faqs = [
    {
      question: "Can I check my result on College Info Nepal?",
      answer:
        "Yes. Once NEB publishes the SEE Result, it will be accessible via the College Info Nepal website at see.collegeinfonepal.com We recommend bookmarking our result page.",
    },
    {
      question: "Can I check the SEE Result 2082 online?",
      answer: "Yes, you can check your SEE Result online via NEB-authorized websites such as College Info Nepal.",
    },
    {
      question: "Can I view someone else's SEE Result?",
      answer: "Yes. If you have your friend's or someone else's Symbol Number, you can check their result as well.",
    },
    {
      question: "Is there any charge to check the SEE Result?",
      answer: "No, there is no charge to check the SEE Result online. However, SMS and IVR services will charge a fee.",
    },
  ]

  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-10">FAQs</h2>

        <div className="border-t border-gray-200">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div key={index} className="border-b border-gray-200 py-5 sm:py-6">
                <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between text-left">
                  <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">{item.question}</p>

                  <span className={`transition-transform duration-300 flex-shrink-0 ml-4`}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#111827"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-700 leading-7">{item.answer}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
