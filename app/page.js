import Image from "next/image";
import FaqList from "./components/FaqList";

export default function Home() {
  const faqs = [
    {
      question: 'What is a Sole Trader, and how does it differ from other business structures in the UK?',
      answer: 'A Sole Trader is an individual running their own business without forming a separate legal entity. Unlike limited companies, sole traders have unlimited personal liability for business debts.',
    },
    {
      question: 'How do I register as a Sole Trader in the UK?',
      answer: 'To register as a Sole Trader, you need to inform HM Revenue and Customs (HMRC) that you are self-employed and register for self-assessment.',
    },
    {
      question: 'What are the tax implications for Sole Traders in the UK?',
      answer: 'Sole Traders must pay income tax on their profits and are also responsible for National Insurance contributions.',
    },
    {
      question: 'Can a Sole Trader employ staff in the UK?',
      answer: 'Yes, Sole Traders can employ staff. They need to operate PAYE (Pay As You Earn) as part of their payroll when they take on employees.',
    },
    {
      question: 'What is the financial liability of a Sole Trader?',
      answer: 'A Sole Trader has unlimited liability, meaning they are personally responsible for all debts and financial obligations of their business.',
    },
    {
      question: 'When should a Sole Trader consider transitioning to a Limited Company in the UK?',
      answer: 'A Sole Trader might consider transitioning to a Limited Company when their business grows and they want to limit their personal liability or take advantage of potential tax benefits.',
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
      <header className="p-4 bg-gray-100 dark:bg-gray-800 text-center">
        <h1 className="text-4xl font-bold">Frequently asked questions about <span className="text-blue-500">Sole Traders</span>.</h1>
      </header>
      <main className="p-4">
        <FaqList heading="Frequently asked questions about Sole Traders" faqs={faqs} />
      </main>
    </div>
  );
}


