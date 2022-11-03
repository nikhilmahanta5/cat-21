import { useState } from "react";

export default function ShoppingCart(props) {
  const [counter, setCounter] = useState(props.InitialProducts);

  function add(index) {
    setCounter([...counter], counter[index.target.id].count++);
  }

  function del(index) {
    if (counter[index.target.id].count > 0) {
      setCounter([...counter], counter[index.target.id].count--);
    }
  }

  return (
    <div>
      <p className="center"> Whats in your cart? </p>
      {counter.map((element, i) => {
        return (
          <div key={i}>
            <ul>
              <li>
                <strong>{element.name} </strong>({element.count})
                <button id={element.id} className="btn" onClick={add}>
                  +
                </button>
                <button id={element.id} className="btn" onClick={del}>
                  -
                </button>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
