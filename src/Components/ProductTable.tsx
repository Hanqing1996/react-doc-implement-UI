import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

type Props = {
  products: any[];
};

type ProductforCategory = {
  category: string;
  products: any[];
};

type List = ProductforCategory[];

const ProductTable = ({ products }: Props) => {
  const list = products.reduce((result: List, current) => {
    const { category, ...res } = current;
    const index = result.map((item) => item.category).indexOf(category);
    const ifNewCategory = result.length === 0 ? true : index === -1;

    if (ifNewCategory) {
      result.push({
        category,
        products: [res]
      });
    } else {
      result[index].products.push(res);
    }
    return result;
  }, []);

  const displayList: JSX.Element[] = [];

  list.forEach((item) => {
    displayList.push(
      <ProductCategoryRow category={item.category} key={item.category} />
    );
    item.products.forEach((product) => {
      displayList.push(<ProductRow row={product} key={product.Name} />);
    });
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{displayList}</tbody>
    </table>
  );
};

export default ProductTable;
