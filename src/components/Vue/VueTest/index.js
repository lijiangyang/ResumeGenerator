Vue.component("greeting", {
    template: `<p>
                    {{name}}: 大家好, 给大家介绍一下我的女朋友@关晓彤
                    <button v-on:click="changeBtn">改名</button>
                </p>`,
    data: function () {
        return {
            name: '鹿晗'
        } 
    },
    methods: {
        changeBtn: function () {
            this.name = 'henry';
        }
    }
})

new Vue({
    el: '#div01'
});

new Vue({
    el: '#div02'
});




