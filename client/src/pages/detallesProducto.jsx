import Header from "../components/header";
import Footer from "../components/footer";
import ProductDetails from "../components/productDetails";
import { useParams } from 'react-router-dom';

function DetallesProducto({agregarAlCarrito}) {
    const { id } = useParams();
    return(
        <ProductDetails productId={id} agregarAlCarrito={agregarAlCarrito} />
    );
};

export default DetallesProducto;