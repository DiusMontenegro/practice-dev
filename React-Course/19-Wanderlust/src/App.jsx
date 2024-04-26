import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CityList from './components/CityList';
import axios from 'axios';

const App = () => {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const BASE_URL = 'http://localhost:8000';

    useEffect(() => {
        const fetchCities = async () => {
            try {
                setIsLoading(true);
                const res = await axios.get(`${BASE_URL}/cities`);
                const data = await res.data;
                setCities(data);
            } catch {
                console.error('Error fetching city data...');
            } finally {
                setIsLoading(false);
            }
        };
        fetchCities();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="/pricing" element={<Pricing />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/app" element={<AppLayout />}>
                    <Route
                        index
                        element={
                            <CityList cities={cities} isLoading={isLoading} />
                        }
                    />
                    <Route
                        path="cities"
                        element={
                            <CityList cities={cities} isLoading={isLoading} />
                        }
                    />
                    <Route path="countries" element={<p>Country List</p>} />
                    <Route path="countries" element={<p>Form</p>} />
                </Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
