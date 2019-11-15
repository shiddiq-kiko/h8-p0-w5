function sorting(arrNumber) {
    // code di sini
    return arrNumber.sort(function(a, b){return a > b})
  }
  
  function getTotal(arrNumber) {
    // code di sini
    if(arrNumber.length === 0){
        return "''"
    }
    var x = arrNumber.pop()
    arrNumber.push(x)
    var y = 0
    for(var a = 0; a <= arrNumber.length; a++){
        if( arrNumber[a] === x){
            y++
        } 
    }
    return `'angka paling besar adalah ${x} dan jumlah kemunculan sebanyak ${y} kali`
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''