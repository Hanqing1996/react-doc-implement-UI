import "./styles.css";
import FilterableProductTable from "./Components/FilterableProductTable";
import PRODUCTS from "./Data/products";

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
