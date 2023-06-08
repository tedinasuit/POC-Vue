var app = new Vue({
    el: '#app',
    data() {
        return {
            vehicles: []
        };
    },
    methods: {
        selectVehicle(value) {
            console.log(`You have selected vehicle: ${value}`); 
        }
    },

    mounted() {
        this.vehicles = ['vehicle1', 'vehicle2', 'vehicle3', 'vehicle4'];
    }

});