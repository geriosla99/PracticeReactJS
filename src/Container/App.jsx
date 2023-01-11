import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Products from "../Components/Products";
function App(props) {
    return (
        <div>
            <Nav />
            <Hero/>
            <Products/>
            <Footer />
        </div>
    )
}

export default App;