import { FaTrash, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";

function Header({
  carrito,
  eliminarProducto,
  vaciarCarrito,
  incrementarCantidad,
  decrementarCantidad
}) {
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-indigo-500 drop-shadow-md">
          Guitar<span className="text-white">LA</span>
        </h1>

        <div className="relative group">
          <button className="flex items-center gap-2 text-xl hover:text-indigo-400 transition-colors">
            <FaShoppingCart />
            <span className="bg-red-500 rounded-full px-2 text-sm">
              {totalItems}
            </span>
          </button>

          <div className="absolute right-0 mt-2 w-80 bg-white text-gray-800 rounded-lg shadow-xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto z-50">
            {carrito.length === 0 ? (
              <p className="text-center text-gray-500">El carrito está vacío.</p>
            ) : (
              <>
                <ul className="space-y-4 max-h-80 overflow-y-auto">
                  {carrito.map((producto) => (
                    <li
                      key={producto.id}
                      className="flex items-center gap-4 border-b pb-4 last:border-b-0"
                    >
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <div className="flex-grow">
                        <p className="font-semibold">{producto.nombre}</p>
                        <p className="text-sm text-gray-600">
                          Precio: ${producto.precio}
                        </p>
                        <p className="text-sm text-gray-600">
                          Cantidad: {producto.cantidad}
                        </p>
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => incrementarCantidad(producto.id)}
                            className="bg-green-500 text-white p-1 rounded-full"
                          >
                            <FaPlus />
                          </button>
                          <button
                            onClick={() => decrementarCantidad(producto.id)}
                            className="bg-yellow-500 text-white p-1 rounded-full"
                          >
                            <FaMinus />
                          </button>
                          <button
                            onClick={() => eliminarProducto(producto.id)}
                            className="bg-red-500 text-white p-1 rounded-full"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex justify-between items-center">
                  <p className="font-bold">Total: ${totalPrecio}</p>
                  <button
                    onClick={vaciarCarrito}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Vaciar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

