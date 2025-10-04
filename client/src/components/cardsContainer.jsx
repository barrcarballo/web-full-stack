import Card from './card';
import productos from '../data/productos'; 

function CardsContainer() {

  const destacados = [
    "Sofá Patagonia", 
    "Biblioteca Recoleta", 
    "Butaca Mendoza", 
    "Escritorio Costa"
  ];

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