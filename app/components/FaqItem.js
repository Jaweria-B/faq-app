'use client';

import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4" onClick={toggleFaq}>
      <button
        className={`flex justify-between items-center w-full p-6 rounded-xl transition-all shadow-md ${
          isOpen
            ? 'bg-gradient-to-r from-primary-start to-primary-end text-white '
            : 'bg-gradient-to-r from-primary-start to-primary-end text-white '
        }`}
      >
        <h2 className="text-lg font-medium">{question}</h2>
        <span className="text-xl">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-white text-black rounded-xl shadow-md border-primary-start border-2" onClick={(e) => e.stopPropagation()}
        >
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;

