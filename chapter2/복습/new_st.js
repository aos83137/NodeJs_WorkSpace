var candy = {
    status : {
        name : 'jeon',
        count : 5
    },
    getName:function(){
        this.status.count--;
        return this.status.count;
    }
};
const{getName, status:{name}}  = candy;
console.log(name);
