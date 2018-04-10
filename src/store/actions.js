import Vue from 'vue'

export const loadData = ({commit}) => {
    console.log('init')
    Vue.http.get('data.json')

    .then(data => {
        console.log('second')   
        console.log(data)     
        if(data){
            console.log('success')

            const funds = data.body.funds
            const stockPortfolio = data.body.stockPortfolio
            const stocks = data.body.stocks

            const portfolio = {
                funds,
                stockPortfolio
            }
            console.log(this.$store)
            commit('SET_STOCKS', stocks)
            commit('SET_PORTFOLIO', portfolio)
        }
    })
}