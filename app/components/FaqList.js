import FaqItem from './FaqItem';

const FaqList = ({ heading, faqs }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 text-center rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-8">{heading}</h1>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-medium">Still have questions?</h2>
        <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
          Speak to an expert
        </button>
      </div>
    </div>
  );
};

export default FaqList;
