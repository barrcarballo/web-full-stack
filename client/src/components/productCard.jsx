import { Link } from 'react-router-dom';

function ProductCard({id, nombre, urlImagen}) {
    return (
            <Link to={`/producto/${id}`} className="tarjeta">
                <div className="tarjetaImagen" >
                    <img src={urlImagen} alt={nombre} />
                </div>
                <div className="tarjetaTitulo" >
                    <p>{nombre}</p>
                </div>
            </Link>
    );
};

export default ProductCard;