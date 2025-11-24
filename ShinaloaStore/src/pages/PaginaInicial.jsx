import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

export default function PaginaInicial() {
  const products = useProducts();
  
  // Tomar solo los primeros 3 productos como destacados
  const featuredProducts = products.slice(0, 3);

  const imageStyle = {
    height: "150px",
    width: "100%",
    objectFit: "contain",
    padding: "10px"
  };

  return (
    <div className="container mt-4">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1>Bienvenido </h1>
        <p className="lead">Explora nuestros </p>
        <Link to="/products" className="btn btn-dark btn-lg">
          Ver Todos los Productos
        </Link>
      </div>

      {/* Productos Destacados */}
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4">Productos Destacados</h2>
        </div>
        {featuredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img 
                src={product.image} 
                style={imageStyle} 
                alt={product.name}
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="fw-bold text-success">${product.price} MXN</p>
                <p className="card-text flex-grow-1">{product.description}</p>
                <div className="mt-auto">
                  <Link 
                    to={`/product/${product.id}`} 
                    className="btn btn-outline-dark w-100"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <h3>¿No encuentras lo que buscas?</h3>
        <p>Explora nuestra colección completa de productos gamer</p>
        <Link to="/products" className="btn btn-primary btn-lg">
          Ver Catálogo Completo
        </Link>
      </div>
    </div>
  );
}