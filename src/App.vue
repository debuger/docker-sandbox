<template>
    <div class="container">
        <layout v-bind:applets="applets"></layout>
    </div>
</template>
<script>
    import layout from './components/layout.vue';
    export default {
        name: 'app',
        data() {
            return {
                applets: ['exchange']
            }
        },
        components: {layout}
    }
</script>
