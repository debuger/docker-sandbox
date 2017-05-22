import Vuex from 'vuex';
import request from 'superagent';
import _ from 'underscore';

export default new Vuex.Store({
    state: {
        rates: {},
        startISO: 'BYN'
    },
    mutations: {
        setRates: function (state, rates) {
            let result = {};
            _.each(rates[state.startISO], function(rate, currencyISO) {
                if (currencyISO == this.startISO) {
                    return;
                }
                result[currencyISO] = {
                    ISO: currencyISO,
                    buy: rate,
                    sell: 0

                };
            }, state);
            delete(rates[state.startISO]);
            _.each(rates, function(value) {
                _.each (value, function(rate, currencyISO) {
                    if (currencyISO == this.startISO || _.isUndefined(result[currencyISO])) {
                        return;
                    }
                    result[currencyISO].sell = rate;
                }, this);
            }, state);
            state.rates = result;
        }
    },
    actions: {
        loadRates: function(context) {
            request.get('/static/data/exchange.json')
                .responseType('json')
                .end(function (error, res) {
                    if (!error && res.body) {
                        context.commit('setRates', res.body);
                    }
                });
        }
    }
});