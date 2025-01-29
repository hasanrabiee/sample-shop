import ProductList from "@/components/shared/product/product-list";
import { getAllProducts } from "@/lib/actions/product.actions";
export const metadata = {
  title: "Homepage",
};
const Homepage = async () => {
  const latestProducts = await getAllProducts();
  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4}/>
    </>
  );
};  

export default Homepage;
