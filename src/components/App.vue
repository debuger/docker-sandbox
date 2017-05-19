<template>
    <div class="container">
        <layout v-bind:applets="applets"></layout>
    </div>
</template>
<script>
    import layout from './layout.vue';
    import store from  './store';
    export default {
        name: 'app',
        store,
        data() {
            return {
                applets: ['exchange']
            }
        },
        components: {layout}
    }
</script>
