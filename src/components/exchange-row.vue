<script type="text/javascript">
    "use strict";
    import Vue from 'vue';
    export default {
        data () {
            return this.rate;
        },
        props: ['rate']
    };
</script>
<template id="template-row">
    <li class="row justify-content-md-center">
        <p class="col-4" v-model="ISO">{{ISO}}</p>
        <p class="col-4" v-model="buy">{{buy}}</p>
        <p class="col-4" v-model="sell">{{sell}}</p>
    </li>
</template>