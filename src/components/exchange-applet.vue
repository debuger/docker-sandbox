<script type="text/javascript">
    import Vue from 'vue';
    import ExchangeRow from './exchange-row.vue';
    import request from 'superagent';
    import _ from 'underscore';

    export default {
        data() {
            return {
                startISO: 'BYN',
                rates: {}
            };
        },
        created: function() {
            this.rates = {};
            this.load();
        },
        watch: {
            rates: function(rates) {
                this.rates = rates;

            }
        },
        methods: {
            load() {
                let self = this;
                request.get('/data/exchange.json')
                    .responseType('json')
                    .end(function (error, res) {
                        if (!error && res.body) {
                            let rates = self.convertRates(res.body);
                            console.log(rates);
                            self.rates = rates;
                        }
                    });
            },
            convertRates(rates) {
                let result = {};
                _.each(rates[this.startISO], function(rate, currencyISO) {
                    if (currencyISO == this.startISO) {
                        return;
                    }
                    result[currencyISO] = {
                        ISO: currencyISO,
                        buy: rate,
                        sell: 0

                    };
                }, this);
                delete(rates[this.startISO]);
                _.each(rates, function(value) {
                    _.each (value, function(rate, currencyISO) {
                        if (currencyISO == this.startISO || _.isUndefined(result[currencyISO])) {
                            return;
                        }
                        result[currencyISO].sell = rate;
                    }, this);
                }, this);
                return result;
            }
        },
        components: {
            ExchangeRow
        }
    };
</script>
<template>
    <div class="col12 hidden-sm-down flex-unordered" data-paceholder="exchange">
        <h5>Exchange</h5>
        <div>
            <ul class="">
                <exchange-row v-for="item in rates" v-bind:rate="item"></exchange-row>
            </ul>
        </div>
    </div>
</template>
