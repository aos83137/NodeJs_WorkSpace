var candyMachine = {
    status:{
        name: 'node',
        count:5,
    },
    getCandy: function(){
        this.status.count--;
        
    }
}