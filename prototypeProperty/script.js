var sowmya ={
    name: 'sowmya',
    age:23,
    occupation:'student',
    dateOfBirth: 1993,
};
//function constructor
var Person = function(name, age, occupation, dateOfBirth)
{
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.dateOfBrirth = dateOfBirth;   
}
//implementing inheritance using prototype property
//writing the method into the prototype property
Person.prototype.calculateAge = function (){  //writing all the methods and properties that are needed to be inherited into the prototype property
        console.log(2016- this.dateOfBrirth);
    }

//writing the properties into the prototype property

Person.prototype.lastName = 'Fernandez';

var sowmya = new Person('sowmya', 23, 'student', 1993); //using new... a brand new empty object is created sowmya
var mike = new Person('mike', 27, 'developer', 1989);

mike.calculateAge();
sowmya.calculateAge();

//calling 
console.log (mike.lastName);
console.log(sowmya.lastName);
    