const app = Vue.createApp({
    data() {
        return {
            courseGoalA : 'Finish the course and learn Vue!',
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