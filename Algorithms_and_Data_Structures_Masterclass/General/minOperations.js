let minOperations = function(log){
    let init = 0;
    for (let i = 0; i< localStorage.length; i++){
        if(logs[i] == "../"){
            if(init > 0){
                init -= ;
            }
        } else if (logs[i] == "./"){
            init += 0
        }else {
            init += 1;
        }
    }
    return init < 0 ? 0 : init;
};