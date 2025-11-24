import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Función para manejar la compra
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío");
      return;
    }
    
    // Aquí puedes redirigir a una página de checkout o mostrar un modal
    alert(`¡Compra exitosa! Total: $${total} MXN\nGracias por tu compra.`);
    
    // Limpiar el carrito después de la compra
    clearCart();
  };

  return (
    <div className="container mt-4">
      <h2>🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <div className="text-center py-5">
          <h4>Tu carrito está vacío</h4>
          <p className="text-muted">Agrega algunos productos para continuar</p>
          <a href="/products" className="btn btn-dark mt-3">
            Ir a Productos
          </a>
        </div>
      ) : (
        <>
          {/* Lista de productos */}
          <ul className="list-group mb-4">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                      marginRight: "15px"
                    }}
                  />
                  <div>
                    <h6 className="mb-1">{item.name}</h6>
                    <small className="text-muted">${item.price} MXN c/u</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className="badge bg-secondary me-3">
                    Cantidad: {item.quantity}
                  </span>
                  <span className="fw-bold me-3">
                    ${item.price * item.quantity} MXN
                  </span>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                    title="Eliminar del carrito"
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Resumen y acciones */}
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h4>Resumen de Compra</h4>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>${total} MXN</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Envío:</span>
                    <span className="text-success">Gratis</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <strong>Total:</strong>
                    <strong className="text-success h5">${total} MXN</strong>
                  </div>
                </div>
                
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <div className="d-grid gap-2">
                    {/* Botón de Comprar */}
                    <button 
                      className="btn btn-success btn-lg"
                      onClick={handleCheckout}
                    >
                      🛍️ Proceder al Pago
                    </button>
                    
                    {/* Botones secundarios */}
                    <button 
                      className="btn btn-outline-dark"
                      onClick={() => window.location.href = '/products'}
                    >
                      ➕ Seguir Comprando
                    </button>
                    
                    <button 
                      className="btn btn-outline-warning"
                      onClick={clearCart}
                    >
                      🗑️ Vaciar Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}