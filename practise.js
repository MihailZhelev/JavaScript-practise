// function getWindow() {
//     window.print();
// }
// getWindow();

// function todayDate() {
//     var today = new Date();
//     var dd = today.getDate();
//     var mm = today.getMonth()+1;
//     var yyyy = today.getFullYear();
//     console.log(dd + '.' + mm + '.' + yyyy);
// }
// todayDate();

// function triangle(a,b,c) {
//     let halfP = (a + b + c) /2;
//     let area  =  halfP * (halfP - a) * (halfP - b) * (halfP - c);
//     area = Math.sqrt(area);
//     console.log(area);
// }
// triangle(5,6,7);


// function rotateStr(str) {
//     let convertArr = str.split('');

//     setInterval(() => {
//         let removedItem = convertArr.pop();
//         convertArr.unshift(removedItem);

//         str = convertArr.join('');
//         console.log(str);
//     }, 1000);
// }
// rotateStr('w3schools');

// function leapYear(year) {
//     if(year % 4 == 0 && year) {
//         console.log(year + ' is leap year')
//     }
//     else {
//         console.log(year + ' is not leap year');
//     }
// }
// leapYear(2016);
// leapYear(1700);


// function guess(int) {
//     let answer = prompt("Write a number between 1 and 10");
//     if(int == answer) {
//         alert("Correct answer!")
//     }
//     else {
//         alert("Try again!")
//     }
// }
// guess(5);


// function isSunday() {
//     var year;
//     for(var year = 2014; year <= 2050; year++) {
//          let date = new Date(year, 0, 1);
//          if(date.getDay() === 0 ) {
//              console.log(year)
//          }
//     }
       
// }
// isSunday();

// function divMul(int, int1, operation) {
// //let operationSTr = operation.toStrsing();
//     let mul = 'mul';
//     let div = 'div';
//     // if(operation === mul) {
//     //     console.log(int * int1);
//     // }
//     // else if( operation === div) {
//     //     console.log(int / int1);
//     // }
//     // else {
//     //     console.log("Not a valid operation");
//     // }
//     switch(operation) {

//         case mul:
//         console.log(int * int1);
//         break;

//         case div:
//         console.log(int / int1);
//         break;

//         default: 
//         console.log('Not a valid operation');
//     }
// }

// divMul(2,2,'mul');
// divMul(2,2,'div');
// divMul(2,2,5);

// function toFahrenheit(celsius) {

//     let fahrenheit = (9 * celsius + (32 * 5)) /5;
//     console.log(fahrenheit);
// }
// toFahrenheit(60);

// function toCelsius(fahrenheit) {

//     let celsius = (fahrenheit - 32) * 5 / 9;
//     console.log(celsius);
// }
// toCelsius(140);

// let url  = window.location.href;
// console.log(url);

// function difference(num) {
 
//     if(num > 13) {
//         console.log((num - 13) * 2);
//     }
//     else {
//         console.log(13 - num);
//     }
// }
// difference(32);
// difference(11);

// function computeInt(int, int1) {
//     if(int === int1) {
//         return (int + int1) * 3
//     }
//     else {
//         return(int + int1);
//     }
// }
// console.log(computeInt(5,5));
// console.log(computeInt(5,6));

// function switchElements(str) {  
//     let newString = str.split('');
//     let lastEl = newString[newString.length-1];
//     let firstEl = newString[0];
   

//     let index1 = Math.floor(Math.random() * str.length);
//     let index2 = Math.floor(Math.random() * str.length);
    
//    if(newString.length >= 1) {

//     // let firstElNewPosition = str.replace(firstEl, someElement);
//     // let lastElNewPosition = str.replace(lastEl, someOtherElement);

//     // newString = newString.replace(firstEl, someElement);
//      /* newString = newString.replace(lastEl, someOtherElement); */
   
//      newString[index1] = firstEl;
//      newString[index2] = lastEl;

//      let toString = newString.join('')
//      console.log(toString);
//    }
    
    

// }
// switchElements("remove");

// function switchElements(str) {
//     let newString = str.substring(1, str.length - 1);
//     return str.charAt(0) + newString + str.charAt(0);
    
// }
// console.log(switchElements('doit'));

// function checkNumber(num) {
//     if(num % 2 == 0 || num % 3 == 0 && num % 7 == 0) {
//         return num;
//     }
//     else {
//         return 'the number is not even or is not multiple by 3 or 7';
//     }
// }

// console.log(checkNumber(16));
// console.log(checkNumber(15));
// console.log(checkNumber(0));

// function newString(str) {
//     let newString = str.substring(str.length - 3);

//     if(str.length >= 3) {
//         return newString + str + newString;
//     }
//     else {
//         return false;
//     }
    
// }
// console.log(newString('some text'));
// console.log(newString('soo'));
// console.log(newString('so'));

// function checkIfJava(str) {
//     let check = str.substring(0,4);
//     if(check === 'Java') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(checkIfJava("first"));
// console.log(checkIfJava("JavaScript"));

// function intBetween(int1, int2) {
//     if(int1 >= 50 && int1 <= 99 && int2 >= 50 && int2 <= 99 ) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(intBetween(20, 67));
// console.log(intBetween(80, 67));

// function script(str) {
   
//     if(str[4] === 's' && str[5] === 'c' && str[6] === 'r' && str[7] === 'i' && str[8] === 'p' && str[9] === 't') {
//         let firstPart = str.substring(0, 3);
//         let secondPart = str.substring(10, str.length);
//         return firstPart + secondPart;
//     }
//     else {
//         return str;
//     }
    
// }
// console.log(script('infoscriptsometext'));
// console.log(script('infoscsometext'));

// function compareInt(int1, int2, int3) {

//     if(int1 > int2 && int1 > int3) {
//         console.log(int1)
//     }
//     else if(int2 > int1 && int2 > int3) {
//         console.log(int2)
//     }
//     else if(int3 > int2 && int3 > int1) {
//         console.log(int3)
//     }
//     else {
//         console.log('There are equal integers')
//     }
// }
// compareInt(1,2,3);
// compareInt(3,2,1);
// compareInt(1,3,2);
// compareInt(1,2,2);

// function compareTo100(int1, int2) {
//     let firstResult = Math.abs(int1 - 100);
//     let secondResult = Math.abs(int2 - 100);

//     if(firstResult < secondResult) {
//        return int1 + ' is closer to 100';
//     }
//     else if(firstResult > secondResult) {
//         return int2 + ' is closer to 100';
//     }  
//     else {
//         return int1 + ' and ' + int2 + ' are equal';
//     }
    
// }
// console.log(compareTo100(103, 86));
// console.log(compareTo100(86, 103));
// console.log(compareTo100(103, 103));
// console.log(compareTo100(1, 1000));

