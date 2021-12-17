type Props = {
  category: string;
};

const ProductCategoryRow = ({ category }: Props) => (
  <tr>
    <td>{category}</td>
  </tr>
);

export default ProductCategoryRow;
