import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Screen2 = () => {
  const navigate = useNavigate();
  const { state: inputValue } = useLocation();
  const [inputArray, setInputArray] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!inputValue) {
      navigate("/");
    } else {
      setInputArray(inputValue.split(""));
      setCurrentInput(inputValue);
    }
  }, [inputValue, navigate]);

  const getFilteredArray = (value, key) => {
    return inputArray.map((v, k) => {
      if (value === v && key !== k) {
        return true;
      }
      return false;
    });
  };

  const handleDelete = (value, key) => {
    const filterArray = getFilteredArray(value, key);
    const newArray = inputArray.filter((v, k) => !filterArray[k]);
    setInputArray(newArray);
    setCurrentInput(newArray.join(""));
  };

  useEffect(() => {
    const hasDuplicates = currentInput
      .split("")
      .some((value, key) => getFilteredArray(value, key).includes(true));
    setIsSuccess(!hasDuplicates);
  }, [currentInput, getFilteredArray]);

  return (
    <div className="container">
      {isSuccess && (
        <div>
          <h1>Congratulations! The string has no duplicate characters</h1>
        </div>
      )}
      <h1>Welcome to Screen 2</h1>
      <p>{inputValue}</p>
      <p>{currentInput}</p>

      <div>
        {inputArray.map((input, key) => {
          return (
            <div key={key}>
              {input}
              <button onClick={() => handleDelete(input, key)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
