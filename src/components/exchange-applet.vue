<script type="text/javascript">
    import Vue from 'vue';
    import ExchangeRow from './exchange-row.vue';
    import request from 'superagent';
    import _ from 'underscore';
    import store from  './store';

    export default {
//        data() {
//            return {
//                startISO: store.state.startISO,
//                rates: store.state.rates
//            };
//        },
        computed: {
            rates() {
                return store.state.rates;
            },
            startISO() {
                return store.state.startISO;
            }
        },
        created: function() {
//            this.rates = {};
            this.load();
        },
        methods: {
            load() {
                store.dispatch('loadRates');
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
                <exchange-row v-for="(item, ISO) in rates" v-bind:rate="item" v-bind:key="item.ISO"></exchange-row>
            </ul>
        </div>
    </div>
</template>
