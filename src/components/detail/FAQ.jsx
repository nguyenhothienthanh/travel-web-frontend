import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import colors from "../../constants/Colors";

const faqs = [
  {
    question: "Where is Ha Long Bay located?",
    answer: "Ha Long Bay is in Quang Ninh Province, northeastern Vietnam, about 170 km from Hanoi.",
  },
  {
    question: "Why is Ha Long Bay famous?",
    answer: "It’s a UNESCO World Heritage Site known for its limestone karsts, emerald waters, mysterious caves, and stunning natural scenery.",
  },
  {
    question: "What's the best time to visit?",
    answer: "From October to April when the weather is cooler, dry, and perfect for outdoor activities.",
  },
  {
    question: "Can I explore the caves and islands?",
    answer: "Yes! Visitors often enjoy discovering caves like Sung Sot or Thien Cung and hiking on islands like Ti Top for panoramic views.",
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div style={{ marginTop: "40px", paddingBottom: "40px", borderBottom: `1px solid ${colors.grayLight}` }}>
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: colors.black,
          marginBottom: "20px",
        }}
      >
        Frequently Asked Questions
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              backgroundColor: colors.white,
              borderRadius: "8px",
              padding: "16px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onClick={() => toggleAnswer(index)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4 style={{ margin: 0, fontSize: "16px", color: colors.black }}>{faq.question}</h4>
              {activeIndex === index ? (
                <FaChevronUp size={16} color={colors.black} />
              ) : (
                <FaChevronDown size={16} color={colors.black} />
              )}
            </div>

            {activeIndex === index && (
              <p
                style={{
                  marginTop: "12px",
                  fontSize: "14px",
                  color: colors.grayDark,
                  lineHeight: "1.6",
                }}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
