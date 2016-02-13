
//ES5
var student ={
	name:"Nuwan",
	id:577
}
var name=student.name;
var id=student.id;

console.log("Name : "+name+" id : "+id);


//ES6

var {id,name}=student;
console.log("ID : "+student.id+" NAME : "+student.name)