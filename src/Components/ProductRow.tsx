type Row = {
  price: string;
  name: string;
  stocked: boolean;
};

type props = {
  row: Row;
};

const ProductRow = ({ row }: props) => {
  const name = row.stocked ? (
    row.name
  ) : (
    <span style={{ color: "red" }}>{row.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{row.price}</td>
    </tr>
  );
};

export default ProductRow;
