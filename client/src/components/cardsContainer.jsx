import Card from './card';
import productos from '../data/productos'; 

function CardsContainer() {
  // Lista de los nombres de productos que quieres destacar
  const destacados = [
    "Sofá Patagonia", 
    "Biblioteca Recoleta", 
    "Butaca Mendoza", 
    "Escritorio Costa"
  ];

  // Filtra los productos para obtener solo los destacados
  const productosDestacados = productos.filter(producto =>
    destacados.includes(producto.nombre)
  );

  return (
    <div className="cards-container">
      {productosDestacados.map((producto) => (
        <Card 
            nombre={producto.nombre}
            urlImagen={`images/${producto.nombre}.png`}
          />
      ))}
    </div>
  );
}

export default CardsContainer;