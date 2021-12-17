type Props = {
  filterText: string;
  inStockOnly: boolean;
};

export default function SearchBar({ filterText, inStockOnly }: Props) {
  return (
    <form>
      <input type="text" placeholder="Search..." value={filterText} />
      <br />
      <label>
        <input type="checkbox" checked={inStockOnly} /> Only show products in
        stock
      </label>
    </form>
  );
}
