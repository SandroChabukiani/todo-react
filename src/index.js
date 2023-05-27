import ReactDOM from "react-dom/client";
import "./index.css";
import React, { useState } from "react";

function MyComponent() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValues, setSubmittedValues] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValues([...submittedValues, inputValue]);
    setInputValue("");
  };

  const handleRemove = (index) => {
    const updatedValues = submittedValues.filter((_, i) => i !== index);
    setSubmittedValues(updatedValues);
  };

  return (
    <div className="fr">
      <div className="sc">
        <h1 className="td">What should we do today?</h1>
        <div className="sacentri">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="What do you want to do?"
              value={inputValue}
              onChange={handleInputChange}
              className="inpt"
            />

            <button className="sub" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="sacentri">
          <h1 className="ch">To do list:</h1>
        </div>
        {submittedValues.length > 0 && (
          <div className="d">
            {submittedValues.map((value, index) => (
              <div>
                <h1 className="hh" key={index}>
                  {index + 1}) {value}
                  <button className="sasa" onClick={() => handleRemove(index)}>
                    Completed ✅
                  </button>
                </h1>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyComponent;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <MyComponent />
  </>
);
