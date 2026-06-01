import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What brings you here today?",
    options: [
      "Anxiety & stress",
      "Relationship issues",
      "Life transitions",
      "General wellbeing",
    ],
  },

  {
    id: 2,
    question: "Have you been to therapy before?",
    options: ["Yes, I have experience", "No, this is my first time"],
  },

  {
    id: 3,
    question: "Which format works better for you?",
    options: ["in person", "Online", "Either works for me"],
  },
];

function BookingModal({ onClose }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setStep(step + 1);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {step === 0 && (
          <div className="modal-welcome">
            <h2 className="modal-title">Let's find the right fit for you</h2>
            <p className="modal-sub">
              3 quick questions to help us prepare for your first session
            </p>
            <button className="btn" onClick={() => setStep(1)}>
              Get started
            </button>
          </div>
        )}

        {step >= 1 && step <= 3 && (
          <div className="modal-question">
            <div className="modal-progress">
              <span>{step} of 3</span>
            </div>
            <h2 className="modal-title">{questions[step - 1].question}</h2>
            <div className="modal-options">
              {questions[step - 1].options.map((option) => (
                <button
                  key={option}
                  className="modal-option"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="modal-result">
            <div className="modal-result-icon">🌿</div>
            <h2 className="modal-title">You're ready to take the first step</h2>
            <p className="modal-sub">
              The first consultation is free and takes 15 minutes. No commitment
              required.
            </p>
            <a href="tel:+306972213104" className="btn">
              Book your free consultation.
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingModal;
