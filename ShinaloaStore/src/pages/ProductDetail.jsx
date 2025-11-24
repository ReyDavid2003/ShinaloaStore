import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../context/CartContext";
export default function ProductDetail() {
  const { id } = useParams();
  const products = useProducts();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) return <h2>Producto no encontrado</h2>;

  const imageStyle = {
    height: "300px",
    width: "100%",
    objectFit: "contain"
  };

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <img src={product.image} style={imageStyle} />
      <p className="mt-3">{product.description}</p>
      <p className="fw-bold">${product.price} MXN</p>
      <button className="btn btn-dark" onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  );
}