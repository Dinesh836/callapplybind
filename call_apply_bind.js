// CALL

var obj={num:2}
var add=function(a){
    return this.num + a;
}
console.log(add.call(obj,5)); 

//APPLY
var arr=[5];
console.log(add.apply(obj,arr)); 

//BIND

var bound=add.bind(obj);
console.log(bound(7));

var student={age:20};
var doPrint=function(){
   return this.age;
}
var bindAge=doPrint.bind(student);
console.log(bindAge());

