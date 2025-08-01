
function Guitar({ guitarra, agregarAlCarrito }) {
  const { nombre, precio, imagen } = guitarra;

  return (
    <div className="guitarra">
      <img src={imagen} alt={`Imagen de ${nombre}`} width="200" />
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <button onClick={() => agregarAlCarrito(guitarra)}>
        Agregar al Carrito
      </button>
    </div>
  );
}

export default Guitar;
