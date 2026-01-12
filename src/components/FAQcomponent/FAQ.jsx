import React from "react";
import "./FAQ.css";

const FAQ = () => {

    const [toggle, setToggle] = React.useState(false);

    const handleToggle = (index) => {
        setToggle(prevToggle => prevToggle === index ? false : index);
    }

  const data = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live?",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];
  return (
    <>
      <div className="faq-section">
        <h1 className="text-3xl font-bold underline">
          Frequently Asked Questions
        </h1>
        <div className="faq-content" >
          {data.map((item, index) => (
            // console.log('Rendering FAQ item:', item),
            console.log('Current toggle state:', toggle),
            console.log('Current index:', index),
            <div key={index} className="faq-item" onClick={() => handleToggle(index)}>
              <h2 className="text-2xl font-bold">{item.question}</h2>
              {toggle === index && <p className="text-gray-600">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
