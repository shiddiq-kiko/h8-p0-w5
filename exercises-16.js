var counter = 0
function totalDigitRekursif(angka) {
    // you can only write your code here!
    var anstr = String(angka)
    if(anstr.length === 0){
        return 0
    } else{
        return Number(anstr[0]) + Number(totalDigitRekursif(anstr.slice(1)))
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5