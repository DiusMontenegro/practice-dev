import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="/pricing" element={<Pricing />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/app" element={<AppLayout />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
