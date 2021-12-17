import { Dispatch, SetStateAction } from "react";

type Props = {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: Dispatch<SetStateAction<string>>;
  onInStockOnlyChange: Dispatch<SetStateAction<boolean>>;
};

export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}: Props) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}
