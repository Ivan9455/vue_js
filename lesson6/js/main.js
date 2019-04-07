//локальный компонент
Vue.component('app-car', {
    data: function () {
        return {
            cars: [
                {model: "bmw"},
                {model: "audi"},
                {model: "mb amg"},
                {model: "ford"}
            ]
        }
    },
    template: '<div><div class="car" v-for="car in cars"><p>{{ car.model }}</p></div></div>'
});
new Vue({
    el: '#app',
    //локальный компонент
    components:{
        'app-car':{
            data: function () {
                return {
                    cars: [
                        {model: "bmw"},
                        {model: "audi"},
                        {model: "mb amg"},
                        {model: "ford"},
                        {model: "TEST"}
                    ]
                }
            },
            template: '<div><div class="car" v-for="car in cars"><p>{{ car.model }}</p></div></div>'
        }
    }
});
new Vue({
    el: '#app2',
});
