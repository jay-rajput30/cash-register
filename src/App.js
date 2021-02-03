import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>cash register</h1>
        <input type="number" className="bill-txtbox" />
        <div className="radio-group">
          <div className="radio-group_item">
            <input type="radio" id="one" value="1" name="cash" />
            <label for="one">1</label>
          </div>
          <div className="radio-group_item">
            <input type="radio" id="five" value="5" name="cash" />
            <label for="one">5</label>
          </div>
          <div className="radio-group_item">
            <input type="radio" id="ten" value="10" name="cash" />
            <label for="one">10</label>
          </div>
          <div className="radio-group_item">
            <input type="radio" id="twenty" value="20" name="cash" />
            <label for="one">20</label>
          </div>
          <div className="radio-group_item">
            <input type="radio" id="one-hundred" value="100" name="cash" />
            <label for="one">100</label>
          </div>
          <div className="radio-group_item">
            <input type="radio" id="five-hundred" value="500" name="cash" />
            <label for="one">500</label>
          </div>
          <div className="radio-group_item">
            <input type="radio" id="two-thousand" value="2000" name="cash" />
            <label for="one">2000</label>
          </div>
        </div>
        <button className="calculate-btn">calculate</button>
        <article></article>
      </div>
    </div>
  );
}
