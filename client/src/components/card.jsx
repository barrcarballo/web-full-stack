function card({nombre, urlImagen}) {
    return (
        <div className="card">
       <img src={urlImagen} alt={nombre} />
       <a href="">{nombre}</a>
     </div>
    );
};

export default card;