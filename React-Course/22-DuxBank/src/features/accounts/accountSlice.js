import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
    isLoading: false,
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        deposit(state, action) {
            state.isLoading = false;
            state.balance += action.payload;
        },
        withdraw(state, action) {
            state.balance -= action.payload;
        },
        requestLoan: {
            prepare(amount, purpose) {
                return {
                    payload: {
                        amount,
                        purpose,
                    },
                };
            },
            reducer(state, action) {
                if (state.loan > 0) return;

                state.loan = action.payload.amount;
                state.loanPurpose = action.payload.purpose;
                state.balance += action.payload.amount;
            },
        },
        payLoan(state) {
            state.balance -= state.loan;
            state.loan = 0;
            state.loanPurpose = '';
        },
        convertingCurrency(state) {
            state.isLoading = true;
        },
    },
});

export function deposit(amount, currency) {
    if (currency === 'USD') return { type: 'account/deposit', payload: amount };

    return async function (dispatch) {
        dispatch({ type: 'account/convertingCurrency' });

        const { data } = await axios.get(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
        );

        const convertedAmount = data.rates.USD;

        dispatch({ type: 'account/deposit', payload: convertedAmount });
    };
}

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;
