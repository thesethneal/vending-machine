import { createStore as _createStore } from 'vuex';

export function createStore() {
    return _createStore({
        state: {
            funds: 0,

            products: [
                {
                    id: 1,
                    name: 'Potato Crisps',
                    price: 3.05,
                    type: 'Chip',
                    quantity: 5,
                    img: 'vite.svg'
                },
                {
                    id: 2,
                    name: 'Stackers',
                    price: 1.45,
                    type: 'Chip',
                    quantity: 5,
                    img: 'vite.svg'
                },
                {
                    id: 3,
                    name: 'Grain Weaves',
                    price: 2.75,
                    type: 'Chip',
                    quantity: 5,
                    img: 'vite.svg'
                },
                {
                    id: 4,
                    name: 'Cowtales',
                    price: 1.50,
                    type: 'Candy',
                    quantity: 5,
                    img: 'vite.svg'
                },
                {
                    id: 5,
                    name: 'Wonka Bar',
                    price: 1.50,
                    type: 'Candy',
                    quantity: 5,
                    img: 'vite.svg'
                },
                {
                    id: 6,
                    name: 'Dr. Salt',
                    price: 1.50,
                    type: 'Drink',
                    quantity: 5,
                    img: 'vite.svg'
                },
                {
                    id: 7,
                    name: 'Mountain Melter',
                    price: 1.50,
                    type: 'Drink',
                    quantity: 5,
                    img: 'vite.svg'
                },
                {
                    id: 8,
                    name: 'Java Cola',
                    price: 1.25,
                    type: 'Drink',
                    quantity: 5,
                    img: 'vite.svg'
                },
                {
                    id: 9,
                    name: 'Quadruple Mint',
                    price: 0.75,
                    type: 'Gum',
                    quantity: 5,
                    img: 'vite.svg'
                },

            ]
        },
        mutations: {
            DECREASE_FUNDS(state, amount) {
                state.funds = state.funds - amount;
            },

            INCREASE_FUNDS(state, amount) {
                state.funds = state.funds + amount;
            },

            DECREASE_INVENTORY(state, id) {
                for(let i = 0; i < state.products.length; i++) {
                    if (id == state.products[i].id) {
                        state.products[i].quantity--;
                    }
                }
            }

        },
        getters: {
            getProduct: (state) => (id) => {
                return state.products.find( product => product.id === id);
            }
        },
        actions: {},
        modules: {},
        // Strict should not be used in production code. It is used here as a
        // learning aid to warn you if state is modified without using a mutation.
        strict: true
    });
}