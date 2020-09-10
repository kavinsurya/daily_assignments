let prime = ((array) =>{
    var prime=[];
   for(var i=0;i<array.length;i++){
       var count=0;

       for(var j=2;j<array[i];j++){
        if(array[i]%j===0){
            count++;
        }
       }
       if(count===0){
            prime.push(array[i]);
        }
   } console.log(prime);
   })
  prime([1,2,3,4,5]);