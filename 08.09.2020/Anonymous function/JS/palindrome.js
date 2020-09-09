(function (array){
    var res=[];
   for(var i=0;i<array.length;i++){
       var str=array[i];
       for (var j = 0; j < str.length; j++) {
            var revStr = str.split('').reverse().join('');
       }
              if (revStr === str){
                res.push(str)
                 }
   }
   
   console.log(res);
})
  (["nitin","madam","kavin"]);