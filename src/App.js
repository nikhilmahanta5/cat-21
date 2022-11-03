import "./styles.css";
import ShoppingCart from "./ShoppingCart";
import { InitialProducts } from "./Data";

export default function App() {
  console.log(InitialProducts);
  return (
    <div className="App">
      <ShoppingCart InitialProducts={InitialProducts} />
    </div>
  );
}
