// code for deciding which player wins between two players using if-else(control structures) 

var playerOneHeight = 162;
var playerTwoHeight = 169;
var playerOneAge = 30;
var playerTwoAge = 26;

var playerOneScore = playerOneHeight + (5*playerOneAge);
var playerTwoScore = playerTwoHeight + (5*playerTwoAge);

if(playerOneScore > playerTwoScore)
    {
        console.log('Player One wins!');
    }
else if(playerTwoScore > playerOneScore)
    {
        console.log('Player Two wins!');
    }
else{
    console.log('There is a draw between two players');
}


// code for deciding which player wins among three players using if-else

var playerThreeHeight = 170;
var playerThreeAge = 35;

var playerThreeScore = playerThreeHeight + (5*playerThreeAge);

if(playerOneScore > playerTwoScore && playerOneScore > playerThreeScore)
    {
        console.log('Player One wins!');
    }
else if(playerTwoScore > playerOneScore && playerTwoScore > playerThreeScore)
    {
        console.log('Player Two wins!');
    }
else if(playerThreeScore > playerOneScore && playerThreeScore > playerTwoScore)
    {
        console.log('Player Three wins!');
    }
else {
    console.log('There is a draw between three players');
}

//// creating objects ////

//one way of creating object
//object literal
var sowmya = {
    name:"Sowmya",
    age:23,
    occupation: "Student",
    birthYear: 1993,
    graduationYear: 2016
}
 // retrieving the values from the object
console.log(sowmya);

//retrieving a particular value
console.log(sowmya.age);
console.log(sowmya.birthYear);

//second way of creating object

var sowmya = new Object();
sowmya.age = 23;
sowmya.birthYear = 1993;
sowmya.hobby = "play basketball";
sowmya.occupation = "student";
// other way of writing 
sowmya['industry'] = "IT";

console.log(sowmya);

////working with functions ////

var averageScore = function(mathScore, englishScore, scienceScore)
    {
      return averageScore = (mathScore + englishScore + scienceScore) /3;
    }

console.log('The average score is'+ ' ' +averageScore(90, 85, 80));

////Working with objects, methods and functions ////

var mark = {
    name:"mark",
    occupation: "Student",
    mathScore: 90,
    englishScore: 85,
    scienceScore: 80,
    birthYear: 1993,
    graduationYear: 2016,
    averageScore: function()
    {
      this.averageScore = (this.mathScore + this.englishScore + this.scienceScore) /3;
    }
};
mark.averageScore();
console.log('The average score of mark is'+ ' ' +averageScore);

///combination of all the basics of javascript

//calculating the score and lost marks of a student

var studentMarks = [85,90,65,75,60];
var studentMarksDifference = [];
var grades = [];

//inserting the difference into the second empty array using for loop

for(var i=0; i<=studentMarks.length-1; i++){
    studentMarksDifference[i]= 100 - studentMarks[i];
}

for (var i=0; i<studentMarksDifference.length; i++) {
    if(studentMarksDifference[i]<20)
        {
            console.log('The grade is A'+' '+studentMarksDifference[i]);
            //for pushing the grades into the empty array grades[]
            grades.push('A');
        }
    else if (studentMarksDifference[i] <= 30 && studentMarksDifference[i] >= 20)
        {
            console.log('The grade is B+'+' '+studentMarksDifference[i]);
            grades.push('B+');
        }
    else 
        {
            console.log('The grade is B'+' '+ studentMarksDifference[i]);
            grades.push('B');
        }
    
    
}