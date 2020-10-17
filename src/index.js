module.exports = function check(str, bracketsConfig) {
  const openBracket = ['(','[','{','|','1','3','5','7','8'];
  const closeBracket = [')',']','}','|','2','4','6','7','8'];
  let strArr = str.split('');
  // if str[i] = openBracket[j] AND str[i+1] = closeBracket[j] then we can simplifier that sentense, by deleting str[i] and str[i+1]
  //let simplifiedStr = str;
  
  for (i = 0; i < strArr.length; i++) {
    let typeOfBrackets = openBracket.indexOf(strArr[i]);
    
    // if opening bracket is followed by the same clothing brackets - delate them
    if ((closeBracket.indexOf(strArr[i + 1]) === typeOfBrackets) && (typeOfBrackets !== -1)) {
      strArr.splice(i, 2);
      i = -1; // start cicle again      
    }

  }  
  if (strArr.length === 0) return true;
    else return false;
}
