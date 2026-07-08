import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    question: 'Is this a Work From Home internship?',
    answer: 'No. This is a Work From Office opportunity.',
  },
  {
    question: 'Is this a paid internship?',
    answer:
      'Yes. During the project deployment phase, you\'ll receive a ₹2,000 monthly support allowance for travel and food expenses. Based on your performance after probation, you may receive a performance-based internship stipend of up to ₹5,000 per month.',
  },
  {
    question: 'Who can apply?',
    answer:
      'Intermediate-level developers currently in their 2nd or 3rd year of Engineering.',
  },
  {
    question: 'Is prior project experience required?',
    answer:
      'No. However, applicants should have intermediate-level development knowledge and a strong willingness to learn.',
  },
  {
    question: 'Will I work on real projects?',
    answer:
      'Yes. Eligible interns will work on live client projects under the guidance of experienced developers.',
  },
  {
    question: 'Will I receive an Internship Offer Letter?',
    answer: 'Yes.',
  },
  {
    question: 'Will I receive a Certificate?',
    answer: 'Yes, upon successful completion of the internship.',
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} id={`faq-${faq.question.slice(0, 10).replace(/\s/g, '-')}`}>
      <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{faq.question}</span>
        <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className="faq-answer">
        <div className="faq-answer-inner">{faq.answer}</div>
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
    <section className="section" id="faq">
      <div className="container">
        <div ref={headerRef} className="faq-header reveal">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div ref={listRef} className="faq-list reveal">
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
