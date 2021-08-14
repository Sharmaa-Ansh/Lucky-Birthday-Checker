import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var sum = 0;

  const [verdict, setVerdict] = useState();
  const [date, setDate] = useState();
  const [luckynum, setLuckynum] = useState();

  function submitHandler(event) {
    event.preventDefault();
    const dateArray = date.split("-");
    dateArray.map((item) => {
      for (let i = 0; i < item.length; i++) {
        sum = sum + Number(item[i]);
        console.log(sum);
      }
    });

    console.log(sum % Number(luckynum));

    if (sum % Number(luckynum) === 0) {
      setVerdict("Your Birthday is Lucky");
    } else {
      setVerdict("Your Birthday is not Lucky");
    }
  }

  return (
    <div className="App">
      <h1>Find out if your Birthdy is Lucky</h1>

      <form onSubmit={submitHandler}>
        {" "}
        <div className="label">Enter Your Birthday Date: </div>
        <div>
          <input
            className="entry"
            type="date"
            onChange={(e) => {
              setDate(e.target.value, 10);
            }}
          />{" "}
        </div>
        <div className="label">Enter Your Lucky Number: </div>
        <div>
          <input
            className="entry"
            type="number"
            onChange={(e) => {
              setLuckynum(e.target.value, 10);
            }}
          />
        </div>
        <button>CHECK</button>
      </form>
      <div className="verdict"> {verdict}</div>
    </div>
  );
}
