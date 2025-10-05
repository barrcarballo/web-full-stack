import Header from "../components/header";
import Footer from "../components/footer";
import ProductDetails from "../components/productDetails";

function DetallesProducto() {
    return(
        <>
            <Header />
            <ProductDetails productId={1} />
            <Footer />
        </>
    );
};

export default DetallesProducto;