const sumAll = function(numbLeft,numbRight) {
    if (typeof(numbLeft)==='number' && typeof(numbRight)==='number' && 
        numbLeft > 0 && numbRight >0){
            let totalSum=0
            if  (numbRight > numbLeft){
                for (let i = numbLeft; i < numbRight+1; i++) {
                    totalSum = totalSum+i;
                }
            }else{
                for (let i = numbRight; i < numbLeft+1; i++) {
                    totalSum = totalSum+i;
                }
            }         
            return totalSum;
    }else{
        return 'ERROR'
    }
    
};

// Do not edit below this line
module.exports = sumAll;
