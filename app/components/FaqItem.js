'use client';

import { FiPlus, FiMinus } from 'react-icons/fi';

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="mb-4 faq-item">
      <div
        className={`flex justify-between items-center w-full p-6 rounded-xl transition-all shadow-md cursor-pointer ${
          isOpen
            ? 'bg-gradient-to-r from-primary-start to-primary-end text-white'
            : 'bg-gradient-to-r from-primary-start to-primary-end text-white'
        }`}
        onClick={onToggle}
      >
        <h2 className="text-lg text-left font-medium">{question}</h2>
        <span className="text-xl">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </div>
      {isOpen && (
        <div className="mt-2 p-4 bg-white text-black text-left rounded-xl shadow-md" onClick={(e) => e.stopPropagation()}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
