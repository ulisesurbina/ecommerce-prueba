import { HashRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import { NavBar, Footer, LoadingScreen, ProtectedRoutes } from "./components";
import { Home, Login, ProductDetails, ShoppingCart } from "./pages";

function App() {
    const isLoading = useSelector((state) => state.isLoading);
    return (
        <div className="App">
            <HashRouter>
                <NavBar />
                {isLoading && <LoadingScreen />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/productDetails/:id" element={<ProductDetails />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/shoppingCart" element={<ShoppingCart />} />
                    </Route>
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
