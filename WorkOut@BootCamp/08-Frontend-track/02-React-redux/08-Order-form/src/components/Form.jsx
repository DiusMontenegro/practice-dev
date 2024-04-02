import { useState } from 'react';
import { Input, Textarea, Checkbox, Button } from '@nextui-org/react';
import Modal from './Modal';

const Form = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [customerName, setCustomerName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    const handlePlaceOrder = () => {
        const order = {
            customerName,
            contactNumber,
            deliveryAddress,
            products,
            total,
        };
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setCustomerName('');
        setContactNumber('');
        setDeliveryAddress('');
        setProducts([]);
        setTotal(0);
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    };

    const handleProductChange = (name, quantity, price) => {
        const existingProductIndex = products.findIndex(product => product.name === name);
        if (existingProductIndex !== -1) {
            const updatedProducts = [...products];
            updatedProducts[existingProductIndex].quantity = quantity;
            setProducts(updatedProducts);
        } else {
            setProducts(prevProducts => [...prevProducts, { name, quantity, price }]);
        }

        let newTotal = 0;
        products.forEach(product => {
            newTotal += product.quantity * product.price;
        });
        setTotal(newTotal);
    };

    const handleCheckboxClick = (name, defaultQuantity) => {
        setProducts(prevProducts => {
            const existingProductIndex = prevProducts.findIndex(product => product.name === name);
            if (existingProductIndex !== -1) {
                return prevProducts.map((product, index) => {
                    if (index === existingProductIndex) {
                        return { ...product, quantity: defaultQuantity };
                    }
                    return product;
                });
            } else {
                return [...prevProducts, { name, quantity: defaultQuantity, price: defaultQuantity === 1 ? 300 : 250 }];
            }
        });
    };

    return (
        <div className="w-full h-auto flex items-top justify-center mt-4">
            <form className="p-4 border dark:border-gray-500 h-[auto] w-[400px] rounded-md flex flex-col gap-2 border-gray-300 mb-4">
                <h1 className="text-xl font-bold mb-2">Order Form</h1>
                <div className="flex w-full flex-wrap md:flex-nowrap md:mb-0 gap-8">
                    <label className="w-full">
                        Customer Name:
                        <Input
                            id="first_name"
                            className="h-10 text-sm focus:outline-none mt-1"
                            size="md"
                            type="text"
                            placeholder="Enter your full name"
                            autoFocus
                            isRequired
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                    </label>
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap mb-4 md:mb-0 gap-8">
                    <label className="w-full">
                        Contact Number:
                        <Input
                            id="contact_number"
                            className="h-10 text-sm focus:outline-none mt-1"
                            size="md"
                            type="text"
                            placeholder="Enter your contact number"
                            isRequired
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                        />
                    </label>
                </div>
                <label>
                    Delivery Address:
                    <Textarea
                        labelPlacement="outside"
                        placeholder="Enter your address"
                        className="w-full overflow-y-auto focus:outline-none h-[100px] p-0"
                        isRequired
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                    />
                </label>
                <h2>Products</h2>
                <div className="flex gap-4 justify-between">
                    <Checkbox color="primary" onClick={() => handleCheckboxClick('V88 T-shirt', 1)}>
                        Limited Edition V88 T-shirt
                    </Checkbox>
                    <input
                        className="w-12 px-[6px] border rounded-md"
                        type="number"
                        min={0}
                        defaultValue={1}
                        onChange={(e) => {
                            const quantity = parseInt(e.target.value);
                            const price = 300;
                            handleProductChange('V88 T-shirt', quantity, price);
                        }}
                    />
                </div>
                <div className="flex gap-4 justify-between">
                    <Checkbox color="primary" onClick={() => handleCheckboxClick('V88 Cap', 1)}>
                        Limited Edition V88 Cap
                    </Checkbox>
                    <input
                        className="w-12 px-[6px] border rounded-md"
                        type="number"
                        min={0}
                        defaultValue={1}
                        onChange={(e) => {
                            const quantity = parseInt(e.target.value);
                            const price = 250;
                            handleProductChange('V88 Cap', quantity, price);
                        }}
                    />
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-end mt-5">
                    <Button
                        color="success"
                        size="sm"
                        variant="shadow"
                        className="font-bold text-white shadow-md"
                        onClick={handlePlaceOrder}
                    >
                        Place Order
                    </Button>
                </div>
            </form>
            <Modal
                isOpen={isOpen}
                onClose={handleCloseModal}
                orderDetails={{
                    customerName,
                    contactNumber,
                    deliveryAddress,
                    products,
                    total,
                }}
            />
        </div>
    );
};

export default Form;
