var app = new Vue({
    el: '#app',
    data() {
        return {
            page: 0 
        }
    },
    methods: {
        nextPage(){
        this.page += 1;

        if (this.page >= 3)
        {
            this.page = 0;
        }
        }
    }

})