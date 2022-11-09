const{createApp}= Vue
 Vue.createApp({
    data(){
        return {
            turnOn:false,
          channels:[
            'images/football-gif.gif',
            'images/horseracing.gif',
            'images/movie-minions.gif',
          ],
          
            visible: 0
        };
    },
    methods: {
        powerOnOrOff(){
            this.turnOn = !this.turnOn;
        },
        next(){
            if(this.visible >= this.channels.length - 1){
                this.visible = 0;
            } else{
                this.visible++;
            }
        },
        previous(){
            if (this.visible <= 0){
                this.visible = this.channels.length -1;
            } else{
                this.visible--;
            }
        },
    },
  }).mount('#tvapp')