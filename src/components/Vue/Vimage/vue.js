new Vue({
    el: '#div01',
    data: {
        widths: 100,
        ended: false
    },
    methods: {
        punch: function () {
            this.widths = this.widths - 20;
            if (this.widths <= 0) {
                this.ended = true;
            }
        },
        restart: function () {
            this.widths = 100;
            this.ended = false;
        }
    },
    computed: {
        
    }
})