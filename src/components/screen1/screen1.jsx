import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./screen.css";

export const Screen1 = () => {
  const navigate = useNavigate();
  let [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    text = text.trim();
    if (!text || text === " ") {
      toast.error(
        "Oops! Looks like you forgot to enter something. Please try again!?",
        { position: "top-right" }
      );
    } else {
      navigate("/screen2", {
        state: text,
      });
    }
  };
  return (
    <div className="container">
      <h1>This is screen 1</h1>
      <form>
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};
