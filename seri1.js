// ex1
var numuser = prompt("Enter a number ", 0)
if(numuser % 2 == 0){
    alert("num is even..")
}else{
    alert("num is odd..")
}

// ex2

var num1 = prompt("Enter a first number", 0)
var num2 = prompt("Enter a second number", 0)
var num3 = prompt("Enter a third number", 0)

var avg = (num1 + num2 + num3) / 3
alert("average : " + avg)

// ex3

var userage = prompt("enter your age : ", 0)
if(userage < 18){
    alert("شما مجاز به ورود نیستید!")
}
else{
    alert("ورود به پنل")
}

// ex4

var BirthDate = prompt("enter your date of birthday : ", 1380)
var calcu = 1403 - BirthDate

if(isNaN(calcu)){
    alert("Your input is incorrect. try again...")
}
else{
    alert("your age : " + calcu)
}

// ex5

var minutes = prompt("enter your time(minutes) : ", 60)
var hour = minutes / 60

if(isNaN(hour)){
    alert("Your input is incorrect. try again...")
}
else{
    alert("Hour : " + hour)
}

// ex6

var userAge = prompt("enter your age : ", 18)
var gender = prompt("enter your gender(male or female) : ")

if(gender === "male" || gender === "female"){
    if(userAge < 18 || gender === "female" )
    alert("Error..")
    else{
        alert("is allowed")
    }   
}
else{
    alert("Your input is incorrect\ntype male or female..")
}

// ex7

var score = prompt("enter your score : " ,16)

    if(score >= 18 && score <= 20)
        alert("Level A")
      
    
    if(score >= 15 && score <= 17) 
        alert("Level B")
       

    if(score >= 12 && score <= 14) 
        alert("Level C")
       
    else
        alert("conditionally")
    

