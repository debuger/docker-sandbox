<script>
    import exchangeapplet from './exchange-applet.vue';
    import weatherapplet from './weather-applet.vue';
export default {
    name: 'layout',
    data() {
        return {};
    },
    components: {
        exchangeapplet,
        weatherapplet
    }
};
</script>
<template>
    <div class="container-fluid">
        <div class="row justify-content-md-center">
            <div class="col">
                <div class="container-fluid">
                    <div class="row">
                        <exchangeapplet></exchangeapplet>
                    </div>
                    <div class="row">
                        <weatherapplet></weatherapplet>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
