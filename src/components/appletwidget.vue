<script type="text/javascript">
    "use strict";
    import Vue from 'vue';
    import Exchangeapplet from 'components/exchange-applet.vue';
    export default {
        data() {
            return {
                name: this.widgetname
            }
        },
        created: function() {
            console.log('created');
            this.load();
        },
        methods: {
            load: function () {
                console.log('loaded');
            }
        },
        components: {
            Exchangeapplet
        },
        props: ['widgetname']
    };
</script>
<template>
    <div>
        <{{name}}> </{{name}}>
    </div>
</template>