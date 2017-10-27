<script type="text/javascript">
    import Vue from 'vue';
    import ExchangeRow from './exchange-row.vue';
    import request from 'superagent';
    import _ from 'underscore';

    export default {
        computed: {
            rates() {
                return this.$store.getters.getRates;
            },
            startISO() {
                return this.$store.state.startISO;
            }
        },
        created: function() {
            this.load();
            setInterval(this.load, 60000);
        },
        methods: {
            load() {
                this.$store.dispatch('loadRates');
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
