function ProductCard({nombre, urlImagen}) {
    return (
            <a className="tarjeta" href="">
                <div className="tarjetaImagen" >
                    <img src={urlImagen} alt={nombre} />
                </div>
                <div className="tarjetaTitulo" >
                    <p>{nombre}</p>
                </div>
            </a>
    );
};

export default ProductCard;