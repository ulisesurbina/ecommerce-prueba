import { HashRouter, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./App.css";
import {NavBar, Footer, LoadingScreen} from "./components";
import { Home, Login, ProductDetails, ShoppingCart } from "./pages";

function App() {
  const isLoading = useSelector(state => state.isLoading)
    return (
      <div className="App">
        <HashRouter>
                <NavBar />
                {isLoading && <LoadingScreen />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/productDetails/:id" element={<ProductDetails />} />
                    <Route path="/shoppingCart" element={<ShoppingCart />} />
                    {/* <Route path="/" element={<ProtectedRoutes />} />
        <Route element={""}>
        </Route> */}
                </Routes>
                <Footer />
        </HashRouter>
        </div>
    );
}

export default App;
