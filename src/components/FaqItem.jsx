import { useState } from "react";

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`faq-item ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="faq-question">
        <span>{question}</span>
        <span className="faq-icon">{open ? "-" : "+"}</span>
      </div>
      {open && <p className="faq-answer">{answer}</p>}
    </div>
  );
}

export default FaqItem;
