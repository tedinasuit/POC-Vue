var app = new Vue({
    el: '#app',
    data() {
        return {
            value: 0
        }
    },
    methods: {
        increment() {
            this.value += 1;
        }
    }

})