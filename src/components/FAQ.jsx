import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    question: 'Is this a Work From Home internship?',
    answer: 'No. This is a full-time Work From Office opportunity located at our KSR Campus headquarters.',
  },
  {
    question: 'Is this a paid internship?',
    answer:
      'Yes. During the project deployment phase (Months 2 & 3), you will receive a ₹2,000 monthly support allowance to help cover travel and food expenses. Following evaluation, high performers transition to a performance-based stipend track of up to ₹5,000 per month.',
  },
  {
    question: 'Who can apply?',
    answer:
      'Intermediate-level developers currently in their 2nd or 3rd year of Engineering studies.',
  },
  {
    question: 'Is prior project experience required?',
    answer:
      'Prior corporate experience is not required. However, applicants must possess intermediate development knowledge and a strong drive to learn production workflows.',
  },
  {
    question: 'Will I work on real projects?',
    answer:
      'Yes. Shortlisted interns who complete training are deployed directly onto live client systems under senior developer supervision.',
  },
  {
    question: 'Will I receive an Internship Offer Letter?',
    answer: 'Yes, an official corporate Internship Offer Letter is provided upon selection.',
  },
  {
    question: 'Will I receive a Certificate?',
    answer: 'Yes, a certificate of internship completion is awarded upon successful conclusion of the program.',
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq-row-card ${isOpen ? 'is-expanded' : ''}`}>
      <button className="faq-trigger-btn" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faq-question-text">{faq.question}</span>
        <span className="faq-toggle-indicator">{isOpen ? '−' : '+'}</span>
      </button>
      <div className="faq-content-dropdown">
        <div className="faq-content-inner-text">{faq.answer}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const headerRef = useScrollReveal();
  const listRef = useScrollReveal();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq-section-redesign" id="faq">
      <div className="container">
        {/* Section Header */}
        <div ref={headerRef} className="reveal section-header-split">
          <div className="section-eyebrow-accent">COMMON INQUIRIES</div>
          <h2 className="section-title-large">
            Frequently Asked <span className="text-highlight-accent">Questions</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div ref={listRef} className="reveal faq-accordion-wrapper">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
