import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";

export default function Products() {
  const products = useProducts();

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Productos</h2>
      <div className="row">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}