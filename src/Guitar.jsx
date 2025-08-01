import { FaShoppingCart } from "react-icons/fa";

function Guitar({ guitarra, agregarAlCarrito }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 border border-gray-100">
      <img
        src={guitarra.imagen}
        alt={`Imagen de ${guitarra.nombre}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {guitarra.nombre}
        </h3>
        <p className="text-lg text-indigo-600 font-semibold mb-4">
          Precio: ${guitarra.precio}
        </p>
        <button
          onClick={() => agregarAlCarrito(guitarra)}
          className="bg-black text-white px-6 py-2 rounded-full font-bold uppercase transition-colors duration-300 hover:bg-indigo-600 flex items-center gap-2"
        >
          <FaShoppingCart /> Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default Guitar;
