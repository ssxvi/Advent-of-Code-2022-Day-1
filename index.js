//Setup
fs = require('fs');

try {  

    // Intitializing the readFileLines with filename

    var data = fs.readFileSync('text.txt', 'utf8');


    // Printing the response

    //console.log(data.toString());    
    var sArray = data.toString().split(/^[ \t]*[\r\n]+/gm);
    var ssArray = new Array(sArray.length);
    console.log(sArray[0]);
    console.log(sArray[0].split(/[\n\r]/g).filter(e => e != ''));

  
    for(i = 0; i < sArray.length; i++){
      var t = sArray[i].split(/[\n\r]/g).filter(e => e != '');
      for(j = 0; j < t.length; j++){
        
      }
      
      ssArray[i]
    }


  
    

} catch(e) {

    // Printing error 

    console.log('Error:', e.stack);

}


