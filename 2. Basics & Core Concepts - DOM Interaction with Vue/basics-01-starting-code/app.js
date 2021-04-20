const app = Vue.createApp({
    data() {
        return {
            courseGoal : 'Finish the course and learn Vue!',
            vueLink : 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return 'Number is less than 0.5'
            } else {
                return 'Number is greater than 0.5'
            }
        },
        outputBool(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return true
            } else {
                return false;
            }
        }
    }


});

app.mount('#user-goal');