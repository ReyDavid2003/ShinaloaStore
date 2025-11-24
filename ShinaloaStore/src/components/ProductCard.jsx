import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const imageStyle = {
    height: "200px",
    width: "100%",
    objectFit: "contain",
    padding: "10px"
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <img src={product.image} style={imageStyle} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="fw-bold">${product.price} MXN</p>
          <Link to={`/product/${product.id}`} className="btn btn-dark w-100">
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}