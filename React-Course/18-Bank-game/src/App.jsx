import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'openAccount':
            return { ...state, isActive: true, balance: 500 };
        case 'deposit':
            return { ...state, balance: state.balance + action.payload };
        case 'withdraw':
            return { ...state, balance: state.balance - action.payload };
        case 'reqLoan':
            return {
                ...state,
                balance: state.balance + action.payload,
                loan: state.loan + action.payload,
            };
        case 'payLoan':
            return {
                ...state,
                balance: state.balance - action.payload,
                loan: state.loan - action.payload,
            };
        case 'closeAccount':
            return initialState;
        default:
            throw new Error('Invalid Action');
    }
}

const initialState = {
    balance: 0,
    loan: 0,
    isActive: false,
};

export default function App() {
    const [{ balance, loan, isActive }, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <div className="text-center pt-[50px]">
            <h1 className="text-3xl font-bold mb-2">Bank Game</h1>
            <div className="border p-2 w-[300px] my-4 mx-auto text-xl border-[#00AEEF] rounded-md">
                <p>Balance: {balance}</p>
                <p>Loan: {loan}</p>
            </div>

            <p>
                <button
                    onClick={() => dispatch({ type: 'openAccount' })}
                    disabled={isActive && true}
                >
                    Open account
                </button>
            </p>
            <p>
                <button
                    onClick={() => dispatch({ type: 'deposit', payload: 150 })}
                    disabled={!isActive}
                >
                    Deposit 150
                </button>
            </p>
            <p>
                <button
                    onClick={() =>
                        balance
                            ? dispatch({ type: 'withdraw', payload: 50 })
                            : null
                    }
                    disabled={!isActive}
                >
                    Withdraw 50
                </button>
            </p>
            <p>
                <button
                    onClick={() =>
                        !loan
                            ? dispatch({ type: 'reqLoan', payload: 5000 })
                            : null
                    }
                    disabled={!isActive}
                >
                    Request a loan of 5000
                </button>
            </p>
            <p>
                <button
                    onClick={() =>
                        loan
                            ? dispatch({ type: 'payLoan', payload: 5000 })
                            : null
                    }
                    disabled={!isActive}
                >
                    Pay loan
                </button>
            </p>
            <p>
                <button
                    onClick={() =>
                        !loan && !balance
                            ? dispatch({ type: 'closeAccount' })
                            : null
                    }
                    disabled={!isActive}
                >
                    Close account
                </button>
            </p>
        </div>
    );
}
