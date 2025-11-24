import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
        ShinaloaStore
        </Link>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Productos
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Carrito ({totalItems})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}