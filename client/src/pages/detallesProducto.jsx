import { useParams } from 'react-router-dom';
import ProductDetails from "../components/productDetails";


function DetallesProducto({agregarAlCarrito}) {
    const { id } = useParams();
    return(
        <ProductDetails productId={id} agregarAlCarrito={agregarAlCarrito} />
    );
};

export default DetallesProducto;