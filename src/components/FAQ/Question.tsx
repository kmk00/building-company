import { useState } from "react";

function Question({ question, answer }: { question: string; answer: string }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const questionContainerStyles = {
    padding: "1rem",
    fontSize: "1.8rem",
    gap: "1rem",
    border: "1px solid gray",
    cursor: "pointer",
  };

  const answerStyles = {
    marginTop: "1rem",
  };

  const flexDivStyles = {
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div onClick={handleClick} style={questionContainerStyles}>
      <div style={flexDivStyles}>
        <p>{question}</p>
        {isClicked ? (
          <img src="https://img.icons8.com/ios-glyphs/30/000000/minus.png" />
        ) : (
          <img src="https://img.icons8.com/ios-glyphs/30/000000/plus.png" />
        )}
      </div>
      <div style={{ display: isClicked ? "block" : "none" }}>
        <hr />
        <p style={answerStyles}>{answer}</p>
      </div>
    </div>
  );
}

export default Question;
