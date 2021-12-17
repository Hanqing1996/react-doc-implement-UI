import SearchBar from "./SearchBar/SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

type Props = {
  products: any[];
};

export default function FilterableProductTable({ products }: Props) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(true);

  return (
    <div>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
