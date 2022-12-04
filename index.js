//Setup
fs = require('fs');

//DAY 1 Stuff

function day1p1(filename){
  try {  
    // Intitializing the readFileLines with filename
    var data = fs.readFileSync(filename, 'utf8');


    // Printing the response
    var sArray = data.toString().split(/[\n\r]/g);
    var sumArray = new Array(sArray.length);
    var peak = 0;
    var sum;
    for(i = 0; i < sArray.length; i++){
      var c1 = new Set();
      var c2 = new Set();
      sArray[i].substring(0, sArray[i].length/2).forEach(e => c1.add(e));
      sArray[i].substring(sArray[i].length/2, sArray[i].length).forEach(e => c1.add(e));;

      
      var intersection = new Set(
        [...setA].filter(element => setB.has(element))
      );

      intersection.forEach(e => e);
    
    }

    return sumArray.reduce((a, b) => Math.max(a, b), -Infinity);
    //return sumArray.indexOf(sumArray.reduce((a, b) => Math.max(a, b), -Infinity)) + 1; //plus 1 because we are indexing starting at 1
    
  } catch(e) {
  
      // Printing error
      console.log('Error:', e.stack);
  
  }
}

function day1p2(filename){
  try {  
    // Intitializing the readFileLines with filename
    var data = fs.readFileSync(filename, 'utf8');


    // Printing the response

    var sArray = data.toString().split(/^[ \t]*[\r\n]+/gm);
    var sumArray = new Array(sArray.length);
    var sum = 0;
    for(i = 0; i < sArray.length; i++){
      var t = sArray[i].split(/[\n\r]/g).filter(e => e != '');
      var s = 0;
      for(j = 0; j < t.length; j++){
        s += Number(t[j]);
      }
      sumArray[i] = s;
    }

    for(i = 0; i < 3; i++){
      sum += sumArray.reduce((a, b) => Math.max(a, b), -Infinity);
      sumArray[sumArray.indexOf(sumArray.reduce((a, b) => Math.max(a, b), -Infinity))] = 0; //plus 1 because we are indexing starting at 1
    }

    return sum;
    
  } catch(e) {
  
      // Printing error 
  
      console.log('Error:', e.stack);
  
  }
}

function day2p1(filename){
  try {  
    // Intitializing the readFileLines with filename
    var data = fs.readFileSync(filename, 'utf8');


    // Printing the response

    var sArray = data.toString().split(/[\n\r]/g);
    var sumArray = new Array(sArray.length);
    var sum = 0;
    for(i = 0; i < sArray.length; i++){
      var r = sArray[i].split(' ');
      sum += rpsRes(r[0], r[1]);
    }

    return sum;
    
  } catch(e) {
  
      // Printing error 
  
      console.log('Error:', e.stack);
  
  }
}

function day2p2(filename){
  try {  
    // Intitializing the readFileLines with filename
    var data = fs.readFileSync(filename, 'utf8');


    // Printing the response

    var sArray = data.toString().split(/[\n\r]/g);
    var sumArray = new Array(sArray.length);
    var sum = 0;
    for(i = 0; i < sArray.length; i++){
      var r = sArray[i].split(' ');
      sum += rpsRes2(r[0], r[1]);
    }

    return sum;
    
  } catch(e) {
  
      // Printing error 
  
      console.log('Error:', e.stack);
  
  }
}
//A B C
//X Y Z
//R P S

//p2
function rpsRes2(p1, p2){
  if(p1 == 'A'){
      if(p2 == 'Y') return 1 + 3;
      if(p2 == 'Z') return 2 + 6;
      if(p2 == 'X') return 3 + 0;
  }
  if(p1 == 'B'){
    if(p2 == 'X') return 1 + 0;
    if(p2 == 'Y') return 2 + 3;
    if(p2 == 'Z') return 3 + 6;
  }
  if(p1 == 'C'){
    if(p2 == 'Z') return 1 + 6;
    if(p2 == 'X') return 2 + 0;
    if(p2 == 'Y') return 3 + 3;
  }
  console.log("ERROR, p1: " + p1 + " p2: " + p2);
  return 0;
}

function rpsRes(p1, p2){
  if(p1 == 'A'){
    if(p2 == 'X') return 1 + 3;
    if(p2 == 'Y') return 2 + 6;
    if(p2 == 'Z') return 3 + 0;
  }
  if(p1 == 'B'){
    if(p2 == 'X') return 1 + 0;
    if(p2 == 'Y') return 2 + 3;
    if(p2 == 'Z') return 3 + 6;
  }
  if(p1 == 'C'){
    if(p2 == 'X') return 1 + 6;
    if(p2 == 'Y') return 2 + 0;
    if(p2 == 'Z') return 3 + 3;
  }
  console.log("ERROR, p1: " + p1 + " p2: " + p2);
  return 0;
}

function day3p1(filename){
  try {  
    // Intitializing the readFileLines with filename
    var data = fs.readFileSync(filename, 'utf8');


    // Printing the response
    var sArray = data.toString().split(/[\n\r]/g);
    //console.log(sArray);
    var sum = 0;
    for(i = 0; i < sArray.length; i++){

      var c1 = new Set();
      var c2 = new Set();
      sArray[i].substring(0, sArray[i].length/2).split('').forEach(e => c1.add(e));
      sArray[i].substring(sArray[i].length/2, sArray[i].length).split('').forEach(e => c2.add(e));;

      var intersection = new Set(
        [...c1].filter(e => c2.has(e))
      );

      
      intersection.forEach(e => {
        if(e.charCodeAt(0) > 95){
            sum += e.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        } else {
            sum += e.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
        }
      });
    
    }

    return sum;
    //return sumArray.indexOf(sumArray.reduce((a, b) => Math.max(a, b), -Infinity)) + 1; //plus 1 because we are indexing starting at 1
    
  } catch(e) {
  
      // Printing error
      console.log('Error:', e.stack);
  
  }
}

function day3p2(filename){
  try {  
    // Intitializing the readFileLines with filename
    var data = fs.readFileSync(filename, 'utf8');


    var sArray = data.toString().split(/[\n\r]/g);
    var sumArray = new Array();

  
    for(i = 0; i < sArray.length; i += 3){

      
      var c1 = new Set();
      var c2 = new Set();
      var c3 = new Set();


      sArray[i].substring(0, sArray[i].length).split('').forEach(e => c1.add(e));
      sArray[i + 1].substring(0, sArray[i + 1].length).split('').forEach(e => c2.add(e));
      sArray[i + 2].substring(0, sArray[i + 2].length).split('').forEach(e => c3.add(e));

      var intersection = new Set(
        [...c1].filter(e => c2.has(e) && c3.has(e))
      );

      intersection.forEach(e => {
        sumArray.push(e);
      });
    }
    
    var sum = 0;
    sumArray.forEach(e => {
      if(e.charCodeAt(0) > 94){
            sum += e.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        } else {
            sum += e.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
        }
      })
    
    return sum;

  } catch(e) {
      // Printing error
      console.log('Error:', e.stack);
  }
}

// console.log("TEST 1");
// console.log(day1p1('day1test.txt'));
// console.log(" ");
// console.log("REAL DAY 1.1");
// console.log(day1p1('text.txt'));
// console.log("REAL DAY 1.2");
// console.log(day1p2('text.txt'));
//console.log(day2p1('day2.txt'));
//console.log(day2p2('day2.txt'));
console.log(day3p2('day3.txt'));


