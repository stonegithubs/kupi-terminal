import Vue from 'vue'


Vue.component('Candles', require('./core_components/Candles/Candles.vue').default)
Vue.component('Orders', require('./core_components/Orders/Orders.vue').default)
Vue.component('OrdersSide', require('./core_components/Orders/OrdersSide.vue').default)
Vue.component('CreateOrder', require('./core_components/CreateOrder/CreateOrder.vue').default)
Vue.component('CreateOrderAside', require('./core_components/CreateOrder/CreateOrderAside.vue').default)
Vue.component('OpenOrders', require('./core_components/OpenOrders/OpenOrders.vue').default)
Vue.component('Trades', require('./core_components/Trades/Trades.vue').default)
Vue.component('MyTrades', require('./core_components/MyTrades/MyTrades.vue').default)
Vue.component('Balance', require('./core_components/Balance/Balance.vue').default)
Vue.component('BalanceTable', require('./core_components/Balance/BalanceTable.vue').default)
Vue.component('BalancePie', require('./core_components/Balance/BalancePie.vue').default)
Vue.component('BalanceTimeseries', require('./core_components/Balance/BalanceTimeseries.vue').default)
Vue.component('Selector', require('./core_components/Selector/Selector.vue').default)
Vue.component('Stocks', require('./core_components/Stocks/Stocks.vue').default)
Vue.component('Pairs', require('./core_components/Pairs/Pairs.vue').default)


Vue.component('Market', require('./utils_components/Market/Market.vue').default)
Vue.component('Menu', require('./utils_components/Menu/Menu.vue').default)
Vue.component('Aside', require('./utils_components/Aside/Aside.vue').default)
Vue.component('Profile', require('./utils_components/Profile/Profile.vue').default)
Vue.component('Login', require('./utils_components/Profile/Login.vue').default)
Vue.component('Accounts', require('./utils_components/Profile/Accounts.vue').default)
// Vue.component('GridCanvasBase', require('vue-grid-canvas'))
// Vue.component('GridCanvas', require('./core_components/GridCanvas/GridCanvas.vue'))
// Vue.component('KupiTable', require('./core_components/KupiTable/KupiTable.vue'))
// Vue.component('Handsontable', require('./core_components/Handsontable/Handsontable.vue'))


