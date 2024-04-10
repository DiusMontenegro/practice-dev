import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
    const [amount, setAmount] = useState(1);
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [rateCurrency, setRateCurrency] = useState('EUR');
    const [result, setResult] = useState('OUTPUT');
    const [loading, setLoading] = useState(false);

    function handleAmount(value) {
        if (value <= 0) {
            setAmount(1);
        } else {
            setAmount(value);
        }
    }

    useEffect(
        function () {
            const controller = new AbortController();

            async function fetchData() {
                try {
                    setLoading(true);
                    const response = await fetch(
                        `https://api.frankfurter.app/latest?amount=${amount}&from=${baseCurrency}&to=${rateCurrency}`,
                        { signal: controller.signal }
                    );
                    const data = await response.json();

                    setResult(data.rates[rateCurrency]);
                    setLoading(false);
                } catch (error) {
                    if (error.message === 'AbortError') {
                        console.log('Error Fecthing Data:', error);
                    }
                }
            }

            if (baseCurrency === rateCurrency) return setAmount(amount);

            fetchData();

            return () => {
                controller.abort();
            };
        },
        [amount, baseCurrency, rateCurrency]
    );

    return (
        <>
            <h1 className="text-center pt-10 text-2xl font-semibold mb-4">
                Currency Exchange App
            </h1>
            <form className="flex justify-center gap-2 mb-6">
                <input
                    value={amount}
                    onChange={(e) => handleAmount(Number(e.target.value))}
                    type="number"
                    autoFocus
                    className="border pl-2"
                    disabled={loading}
                />
                <select
                    value={baseCurrency}
                    onChange={(e) => setBaseCurrency(e.target.value)}
                    disabled={loading}
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="CAD">CAD</option>
                    <option value="INR">INR</option>
                    <option value="JPY">JPY</option>
                    <option value="PHP">PHP</option>
                </select>
                <select
                    value={rateCurrency}
                    onChange={(e) => setRateCurrency(e.target.value)}
                    disabled={loading}
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="CAD">CAD</option>
                    <option value="INR">INR</option>
                    <option value="JPY">JPY</option>
                    <option value="PHP">PHP</option>
                </select>
            </form>
            <p className="text-center text-xl font-bold underline">
                {loading ? 'Loading data...' : `${result} ${rateCurrency}`}
            </p>
        </>
    );
};

export default App;
