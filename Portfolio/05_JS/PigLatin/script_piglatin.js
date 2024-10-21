

function translateToPigLatin() {
    var input = document.getElementById("txtVal").value; 
    var pigLatinTranslation = igpayAtinlay(input); 
    document.getElementById("pigLatLbl").innerText = pigLatinTranslation; 
}

function igpayAtinlay(str) {
    var returnArray = [];
    var wordArray = str.split(" "); 
  
    for (var i = 0; i < wordArray.length; i++) {
      var word = wordArray[i];
      var beginning = word.charAt(0);
      
      if (/[aeiouAEIOU]/.test(beginning)) {
        returnArray.push(word + "way"); 
        continue;
      }
  
      for (var ii = 1; ii < word.length; ii++) {
        if (/[aeiouAEIOU]/.test(word.charAt(ii))) {
          returnArray.push(word.substring(ii) + beginning + "ay"); 
          break;
        } else {
          beginning += word.charAt(ii); 
        }
      }

      if (ii === word.length) {
        returnArray.push(word + "ay");
      }
    }
    
    return returnArray.join(" "); 

  }
  
  
