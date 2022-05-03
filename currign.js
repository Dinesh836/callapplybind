// curring 

let multiply=fucntion(a,b){
   console.log(a*b);
}
let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);