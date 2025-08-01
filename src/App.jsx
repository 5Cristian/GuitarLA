import { useState } from "react";
import guitars from "./data/guitars.js";
import Guitar from "./components/Guitar";
import Header from "./components/Header";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.id === producto.id);
      return existe
        ? prevCarrito.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          )
        : [...prevCarrito, { ...producto, cantidad: 1 }];
    });
  };

  const incrementarCantidad = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const decrementarCantidad = (id) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const eliminarProducto = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <>
      <Header
        carrito={carrito}
        eliminarProducto={eliminarProducto}
        vaciarCarrito={vaciarCarrito}
        incrementarCantidad={incrementarCantidad}
        decrementarCantidad={decrementarCantidad}
      />

      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">Guitarras Disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {guitars.map((guitarra) => (
            <Guitar
              key={guitarra.id}
              guitarra={guitarra}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;


