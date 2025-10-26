import "./App.css";
import { useState } from "react";

function App() {
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  function handleMail(event) {
    setMail(event.target.value);
  }

  function handleMessage(event) {
    setMessage(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!mail || !message) {
      console.log("Please fill Out both Fields!");
      return;
    }
    console.log("Mail :", mail);
    console.log("Message :", message);

    // clear input
    setMail("");
    setMessage("");
  }

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <form
          action=""
          className="flex flex-col p-6 sm:p-8 md:p-10 gap-6 rounded-2xl shadow-2xl w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/5"
        >
          <h1 className="font-bold text-2xl text-start text-gray-800">
            Help us improve!
          </h1>

          <input
            type="email"
            placeholder="Mail"
            className="shadow px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
            onChange={handleMail}
            value={mail}
          />

          <textarea
            name="text"
            id="text-area"
            placeholder="Please Share Your Thoughts"
            className="shadow px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 min-h-[120px] resize-none"
            value={message}
            onChange={handleMessage}
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-all py-3 font-bold text-white rounded-2xl cursor-pointer"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
