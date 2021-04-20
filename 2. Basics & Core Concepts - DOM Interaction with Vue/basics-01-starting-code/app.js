const app = Vue.createApp({
    data() {
        return {
            courseGoalA : '<h1>Finish the course and learn Vue!</h1>',
            courseGoalB : 'Code is hard but vue is grate',
            vueLink : 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
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