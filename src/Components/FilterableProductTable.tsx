import SearchBar from "./SearchBar/SearchBar";
import ProductTable from "./ProductTable";
import PRODUCTS from "../Data/products";

export default function FilterableProductTable() {
  return (
    <div>
      <SearchBar />
      <ProductTable products={PRODUCTS} />
    </div>
  );
}
