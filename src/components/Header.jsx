
function Header({ carrito, eliminarProducto, vaciarCarrito, incrementarCantidad, decrementarCantidad }) {
  return (
    <header>
      <h1>🛒 GuitarLA - Carrito de Compras</h1>
      <div className="carrito">
        <h2>Carrito</h2>
        {carrito.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <ul>
              {carrito.map((producto) => (
                <li key={producto.id}>
                  {producto.nombre} - Cantidad: {producto.cantidad}
                  <button onClick={() => incrementarCantidad(producto.id)}>+</button>
                  <button onClick={() => decrementarCantidad(producto.id)}>-</button>
                  <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
