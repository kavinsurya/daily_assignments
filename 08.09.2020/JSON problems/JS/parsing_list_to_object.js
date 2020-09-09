var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];


 for(var i = 0; i< arr.length; i++) {
    var tempData = {}
    for(var e = 0; e< arr[i].length; e++) {
      tempData[arr[i][e][0]] = arr[i][e][1]
    }
    tranformEmployeeList.push(tempData)
  }

 console.log( tranformEmployeeList);
}
transformEmployeeData(arr)