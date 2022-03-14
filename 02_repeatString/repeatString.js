const repeatString = function(word,number) {
    let phrase="";
    if (number<0){
        return "ERROR";
    }else{
        for (let i = 0; i < number; i++) {
            phrase=phrase+word;
        }
        return phrase;
    }
    
};
// Do not edit below this line
module.exports = repeatString;
