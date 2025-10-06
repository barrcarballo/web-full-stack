import { Link } from 'react-router-dom';

function card({id, nombre, urlImagen}) {
    return (
        <div className="card">
        <img src={urlImagen} alt={nombre} />
        <Link to={`/producto/${id}`}>{nombre}</Link>
     </div>
    );
};

export default card;