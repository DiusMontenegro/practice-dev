import React from 'react';

const Modal = ({ isOpen, onClose, orderDetails }) => {
    if (!isOpen) return null;

    // Calculate total dynamically
    const calculateTotal = () => {
        let total = 0;
        orderDetails.products.forEach(product => {
            total += product.quantity * product.price;
        });
        return total;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-full dark:bg-black">
                    <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t-lg">
                        <h3 className="text-lg font-semibold">Order Complete</h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold focus:outline-none"
                            onClick={onClose}
                        >
                            <span className="text-black dark:text-white h-6 w-6 text-2xl block">×</span>
                        </button>
                    </div>
                    <div className="p-6 flex flex-col">
                        <p className="mb-4"><span className="font-semibold">Customer Name:</span> {orderDetails.customerName}</p>
                        <p className="mb-4"><span className="font-semibold">Contact Number:</span> {orderDetails.contactNumber}</p>
                        <p className="mb-4"><span className="font-semibold">Delivery Address:</span> {orderDetails.deliveryAddress}</p>
                        <p className="mb-4 font-semibold">Order Details:</p>
                        <ul className="mb-4">
                            {orderDetails.products.map((product, index) => (
                                <li key={index}>{product.name} {product.quantity}x = Php {(product.quantity * product.price).toFixed(2)}</li>
                            ))}
                        </ul>
                        <p className="font-semibold mb-2">Total: Php {calculateTotal().toFixed(2)}</p>
                        <button
                            className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none mt-5 w-[100px]"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
