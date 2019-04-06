new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue!',
        styleCSS:''
    },
    methods:{
        changeText(){
            this.title = "test test"
        }
    }
});
