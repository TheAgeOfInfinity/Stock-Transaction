import stocks from '../../data/stocks'

const state = {
    stocks: [],
    price: {
        'BMW': [],
        'Google': [],
        'Apple': [],
        'Twitter': []
    }
}
const company = ['BMW','Google','Apple','Twitter']

const mutations = {
    'SET_STOCKS' (state, stocks){
        state.stocks = stocks;
        console.log(company)
        for (let i = 0; i < stocks.length; i++) { 
            state.price[company[i]].push(stocks[i].price)          
        }
    },
    'RND_STOCKS' (state){
        var counter = {
            i: 0,
            increase: function(){
                return this.i++
            }
        }
        state.stocks.forEach((stock) => {
            var newPrice = Math.round(stock.price + (100 - Math.random()*160))
            stock.price = newPrice
            state.price[company[counter.increase()]].push(newPrice)
        })
    }
}

const actions = {
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS',stocks)
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS')
    }
}

const getters = {
    stocks: state => {
        return state.stocks
    },
    price: state => {
        return state.price
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}