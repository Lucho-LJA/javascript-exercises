const removeFromArray = function(arrayData,...elementsToDelete) {
    let arrayElementsToDel= elementsToDelete;
    let arrayDataCopy=arrayData
    for (let element of arrayElementsToDel) {
        arrayDataCopy=arrayDataCopy.filter((item) => item !== element);     
    }
    return arrayDataCopy;

};

// Do not edit below this line
module.exports = removeFromArray;
