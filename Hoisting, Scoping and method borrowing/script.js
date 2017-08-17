///////////////////////////////////////
// Hoisting
// only used for declarations but not for expressions of initializations
//example1 (working)
x = 10;
y = 30;

console.log(x+y);
                                                                   
//here the variable declarations are moved to the top of the scope.
var x;
var y;

//example2 (will not work and we get the result as undefined)


var x = 'hello';
var z;
console.log(x+' '+z); //we get the y value as undefined
  
z = 'hie!' ;

///////////////////////////////////////
// Scoping - lexical scoping

// local scope variables can access the global scope variables(parent function)
//in lexical scoping the local variable are not visible to the global variables and hence they cannot access them for performing any action
  
var a = 10; //this is the global scope
firstFunction();

function firstFunction(){
    // this is the local scope and this is also the parent function of additionFunction()
    var b = 20;
    additionFunction();
    
    function additionFunction(){
        //this is the local scope and this access the variable from the parent function firstFunction() and from the global scope
        var c= 30;
        // variables a and b are accessed from the parent function and the global scope variable
        var d = a+b+c;
        console.log(d);
    }
}

////////////////////////////////////////////////////
// The this keyword

// regular call
console.log(this); //this prints the window object 

// method call

//creating an object
var jake ={
    name: 'Jake',
    yearOfBirth:1993,
    occupation: 'Student',
    calculateAge: function()
    {
    console.log(2016 - this.yearOfBirth);
    
}
}

jake.calculateAge();

//implementing the concept of method borrowing
//method borrowing means borrowing of a method from another function

var jacob ={
    name: 'Jake',
    yearOfBirth:1965,
    occupation: 'Student'
}

jacob.calculateAge = jake.calculateAge; //the calculateAge method from jake is borrowed my jacob

jacob.calculateAge();







