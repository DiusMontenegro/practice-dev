import { useSelector } from 'react-redux';

function formatCurrency(value) {
    return new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
}

function BalanceDisplay() {
    const account = useSelector((store) => store.account);

    return <div className="balance">{formatCurrency(account.balance)}</div>;
}

export default BalanceDisplay;
