import React, { useState } from "react";
import "./styles.css";

let one,
  five,
  ten,
  twenty,
  hundred,
  fiveHundred,
  twoThousand = 0;

export default function App() {
  let [bill, setBill] = useState(0);
  let [returnChange, setReturnChange] = useState([]);
  let [cashReceived, setCashReceived] = useState(0);

  function radChangeHandler(e) {
    let s = e.target.value;
    setCashReceived(+s);
  }

  function billChangeHandler(e) {
    let bill = e.target.value;
    setBill(+bill);
  }

  function calculateBill() {
    let diff = cashReceived - bill;
    while (diff >= 0) {
      if (diff - 2000 > 0) {
        twoThousand += 1;
        diff = diff - 2000;
        // console.log(twoThousand);
      } else if (diff - 500 > 0) {
        fiveHundred = fiveHundred + 1;
        diff = diff - 500;
      } else if (diff - 100 > 0) {
        hundred = hundred + 1;
        diff = diff - 100;
      } else if (diff - 20 > 0) {
        twenty = twenty + 1;
        diff = diff - 20;
      } else if (diff - 10 > 0) {
        ten = ten + 1;
        diff = diff - 10;
      } else if (diff - 5 > 0) {
        five = five + 1;
        diff = diff - 5;
      } else {
        diff = diff - 1;
        one = one + 1;
      }
    }
    console.log(one, five, ten, twenty, hundred, fiveHundred, twoThousand);
  }

  // returnChangeHandler(0);
  return (
    <div className="App">
      <div className="container">
        <h1>cash register</h1>
        <input
          onChange={billChangeHandler}
          type="number"
          className="bill-txtbox"
        />
        <div className="radio-group">
          <div className="radio-group_item">
            <input
              onChange={radChangeHandler}
              type="radio"
              id="one"
              value="1"
              name="cash"
            />
            <label for="one">1</label>
          </div>
          <div className="radio-group_item">
            <input
              onChange={radChangeHandler}
              type="radio"
              id="five"
              value="5"
              name="cash"
            />
            <label for="five">5</label>
          </div>
          <div className="radio-group_item">
            <input
              onChange={radChangeHandler}
              type="radio"
              id="ten"
              value="10"
              name="cash"
            />
            <label for="ten">10</label>
          </div>
          <div className="radio-group_item">
            <input
              onChange={radChangeHandler}
              type="radio"
              id="twenty"
              value="20"
              name="cash"
            />
            <label for="twenty">20</label>
          </div>
          <div className="radio-group_item">
            <input
              onChange={radChangeHandler}
              type="radio"
              id="one-hundred"
              value="100"
              name="cash"
            />
            <label for="one-hundred">100</label>
          </div>
          <div className="radio-group_item">
            <input
              onChange={radChangeHandler}
              type="radio"
              id="five-hundred"
              value="500"
              name="cash"
            />
            <label for="five-hundred">500</label>
          </div>
          <div className="radio-group_item">
            <input
              onChange={radChangeHandler}
              type="radio"
              id="two-thousand"
              value="2000"
              name="cash"
            />
            <label for="two-thousand">2000</label>
          </div>
        </div>
        <button onClick={calculateBill} className="calculate-btn">
          calculate
        </button>
        <article>
          {cashReceived} {bill}
        </article>
      </div>
    </div>
  );
}
