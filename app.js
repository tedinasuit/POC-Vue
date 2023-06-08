var app = new Vue({
    el: '#app',
    data() {
        return {
            username: ''    
        }
    },
    methods: {
        submit(){
            console.log(this.username)
        }
    }

})